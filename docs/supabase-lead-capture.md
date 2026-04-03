# Supabase Lead Capture Setup

## Purpose
Store contact form submissions safely in Supabase using a server-side API route.

## Required environment variables
Add these to `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Security rules
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the frontend
- Contact form submissions should go through `app/api/contact/route.ts`
- Validate all input on the server
- Add rate limiting later if traffic increases

## Suggested table
Create a table called `contact_leads` with fields:
- `id` (uuid, primary key)
- `created_at` (timestamp, default now())
- `name` (text, required)
- `email` (text, required)
- `company` (text, nullable)
- `message` (text, required)

## Suggested SQL
```sql
create extension if not exists pgcrypto;

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  message text not null
);
```

## Current implementation notes
- API endpoint: `/api/contact`
- Server validates required fields and email format
- Form should show success/error states in the UI
- Backend is ready for Supabase once env vars and table exist
