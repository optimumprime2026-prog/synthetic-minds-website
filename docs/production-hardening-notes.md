# Production Hardening Notes

## Current status
- Server-side validation is in place for contact form submissions
- Basic in-memory rate limiting is in place
- Honeypot field is in place
- Secrets are server-side only

## Known MVP limitations
- Rate limiting is in-memory and not distributed
- No CAPTCHA / advanced bot protection yet
- No email notification yet unless webhook is configured
- No analytics yet
- Metadata / SEO still needs a dedicated pass

## Recommended next improvements
1. Move rate limiting to a persistent/shared store for production traffic
2. Add a webhook or alerting destination for lead notifications
3. Add structured metadata, OG image, and favicon set
4. Add analytics and error monitoring
5. Add stronger form abuse protections if traffic increases
