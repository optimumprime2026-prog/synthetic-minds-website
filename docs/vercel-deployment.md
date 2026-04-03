# Vercel Deployment Guide — Synthetic Minds Website

## Recommended stack
- Hosting: Vercel
- Database / backend: Supabase

## Step 1 — Push project to Git
Create a git repository and push the website project to GitHub (recommended), GitLab, or Bitbucket.

## Step 2 — Create Vercel project
- Go to https://vercel.com
- Import the repository
- Select the `synthetic-minds-website` project
- Framework preset should detect Next.js automatically

## Step 3 — Configure environment variables
Add these in Vercel Project Settings → Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LEAD_NOTIFY_WEBHOOK_URL` (optional)

## Step 4 — Deploy
Trigger the initial deployment.

## Step 5 — Production verification
After deploy:
- Open homepage
- Check `/solutions`, `/industries`, `/about`, `/contact`
- Submit a test contact lead
- Confirm lead is stored in Supabase

## Step 6 — Domain
Connect the production domain in Vercel once the app is verified.

## Notes
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only
- Do not expose secrets in public repo
- Vercel is the recommended production host for this Next.js app
