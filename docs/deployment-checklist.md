# Deployment-Ready Checklist — Synthetic Minds Website

## Hosting decision
- Frontend / Next.js app: Vercel
- Backend / lead storage: Supabase

## Pre-deployment checklist
- [x] Next.js app builds successfully
- [x] Contact API route works locally
- [x] Supabase lead capture works locally
- [x] Environment variables separated from frontend code
- [x] `.gitignore` excludes local secrets and build output
- [ ] Git repository initialized and pushed
- [ ] Vercel project created
- [ ] Vercel environment variables configured
- [ ] Production domain connected
- [ ] Production contact flow tested
- [ ] Notification webhook configured (optional)

## Environment variables needed in Vercel
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LEAD_NOTIFY_WEBHOOK_URL` (optional)

## Production checks
- Test homepage and all primary routes
- Test `/contact` form submission
- Verify lead appears in Supabase
- Verify rate limiting and validation still behave correctly
- Check mobile layout
- Check metadata and favicon setup

## Recommended next hardening steps
- Add better rate limiting for production
- Add bot/spam protection improvement if traffic grows
- Add notification webhook or email alert
- Add analytics
- Add SEO metadata and OG images
