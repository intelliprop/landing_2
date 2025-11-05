intelliprop-site
=================

A Next.js 14 app dir project that mirrors the public marketing site structure with Tailwind CSS and reusable components.

Quick start
-----------

```bash
pnpm install  # or npm i / yarn
pnpm dev
# build
pnpm build && pnpm start
```

Tech
----
- Next.js app router (TypeScript)
- Tailwind CSS with brand tokens
- Simple component library in `components/`

Structure
---------
See `app/(marketing)` for public pages: `/`, `/pricing`, `/generate-report`, `/insights`, `/blog`, `/about`, `/faq`, `/privacy`, `/terms`.

Assets
------
Add/replace images inside `public/` as needed:
- `logo.png` - Company logo (used in Header)
- `property-hero.jpg` - Hero image for homepage
- `property-brief.jpg` - Image for brief report feature
- `property-address.jpg` - Image for address report feature
- `finance-analytics.jpg` - Finance/analytics themed image
- `investment-chart.jpg` - Investment/chart themed image
- `market-data.jpg` - Market data themed image
- Legacy placeholders: `placeholder-hero.jpg`, `placeholder-brief.jpg`, `placeholder-address.jpg`

Branding
--------
Tailwind theme tokens (also match Framer custom code):
- primary: `#00C4B3`
- ink: `#0D1B2A`
- muted: `#5B6170`
- accent: `#FFB600`
- bg: `#FFFFFF`
- bgAlt: `#F5F7F8`
- border: `#E5E7EB`


