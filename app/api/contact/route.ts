import { NextResponse } from 'next/server';
import { sendLeadNotification } from '@/lib/notify';
import { checkRateLimit } from '@/lib/rate-limit';
import { getSupabaseServerClient, hasSupabaseServerConfig } from '@/lib/supabase';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for') ?? 'unknown';
    const identifier = forwardedFor.split(',')[0].trim();
    const rateLimit = checkRateLimit(identifier);

    if (!rateLimit.allowed) {
      return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
    }

    const body = await request.json();

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const company = String(body.company ?? '').trim();
    const message = String(body.message ?? '').trim();
    const website = String(body.website ?? '').trim();

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (name.length > 120 || email.length > 200 || company.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Input exceeds allowed length.' }, { status: 400 });
    }

    if (!hasSupabaseServerConfig()) {
      return NextResponse.json(
        { error: 'Server is not configured for lead capture yet.' },
        { status: 503 }
      );
    }

    const supabase = getSupabaseServerClient();
    const payload = {
      name,
      email,
      company: company || null,
      message,
    };

    const { error } = await supabase.from('contact_leads').insert(payload);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save lead.' }, { status: 500 });
    }

    try {
      await sendLeadNotification(payload);
    } catch (notifyError) {
      console.error('Lead notification error:', notifyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}
