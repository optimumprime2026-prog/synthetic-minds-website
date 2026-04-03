# Homepage Implementation Brief — Synthetic Minds

## Purpose
Implement the first production-oriented homepage for Synthetic Minds using the approved wireframe, copy direction, brand direction, and design system.

## Stack
- Next.js App Router
- TypeScript
- Framer Motion
- CSS modules or clean global/component styling

## Inputs to follow
- `docs/homepage-wireframe.md`
- `docs/homepage-copy-v1.md`
- `docs/brand-direction-v1.md`
- `docs/design-system-v1.md`

## Homepage implementation goals
- Build a clean enterprise-style homepage
- Keep the UI high-trust and conversion-focused
- Implement strong visual hierarchy
- Use motion subtly, not decoratively
- Ensure responsive layout across desktop, tablet, and mobile

## Required homepage sections
1. Hero
2. Problem
3. Solution
4. How it works
5. Industry focus
6. Why Synthetic Minds
7. Founders / credibility
8. CTA
9. Footer

## UX requirements
- Primary CTA visible above the fold
- Repeated CTA lower on the page
- Strong readability and spacing
- Simple navigation
- No visual clutter

## Engineering requirements
- Clean file structure
- Reusable section components where useful
- No unnecessary dependencies
- No secrets in frontend
- Production-safe defaults

## Security requirements
- Prepare forms with validation in mind
- No custom auth implementation
- Keep external integrations abstracted into `lib/`
- Handle edge states cleanly

## AI workflow guidance
- Claude defines UX and section hierarchy
- GPT helps refine implementation and copy mapping
- Codex organizes files and implements components
- Human reviews all outputs before production use

## First implementation target
Build the homepage only, with production-quality structure and styling, before adding deeper pages.
