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
- `applogo.png` - **REQUIRED** - Icon-only logo (512x512px master) for header and favicon
- `app/icon.png` - **RECOMMENDED** - Next.js auto-favicon (export from applogo.png master)
- `logo.png` - Full wordmark logo (recolored to match brand tokens)
- `property-hero.jpg` - Hero image for homepage (with minimalist filters)
- `property-brief.jpg` - Image for brief report feature (desaturated)
- `property-address.jpg` - Image for address report feature (desaturated)
- `finance-analytics.jpg` - Finance/analytics themed image (desaturated)
- `investment-chart.jpg` - Investment/chart themed image (desaturated)
- `market-data.jpg` - Market data themed image
- Legacy placeholders: `placeholder-hero.jpg`, `placeholder-brief.jpg`, `placeholder-address.jpg`

**Note**: See `ASSETS_NEEDED.md` for detailed asset specifications.

Branding
--------
Tailwind theme tokens (also match Framer custom code):
- primary: `#00C4B3` - Used for buttons, hover states, accents
- ink: `#0D1B2A` - Used for text, icons, default links
- muted: `#5B6170` - Secondary text
- accent: `#FFB600` - Special highlights
- bg: `#FFFFFF` - White background
- bgAlt: `#F5F7F8` - Alternate background
- border: `#E5E7EB` - Border color

**Branding Logic**:
- All primary buttons use `bg-primary` with white text
- Navigation links use `text-ink` with `hover:text-primary`
- Images use minimalist filters (`saturate-0 contrast-110`) for subdued, professional aesthetic
- Logo/icon colors: Use `ink` (#0D1B2A) on transparent background for consistency


