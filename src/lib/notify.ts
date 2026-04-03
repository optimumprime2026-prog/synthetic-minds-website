export async function sendLeadNotification(payload: {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}) {
  const webhookUrl = process.env.LEAD_NOTIFY_WEBHOOK_URL;

  if (!webhookUrl) {
    return { skipped: true };
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: 'New Synthetic Minds website lead received.',
      lead: payload,
    }),
  });

  if (!response.ok) {
    throw new Error('Lead notification failed.');
  }

  return { sent: true };
}
