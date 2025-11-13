# Assets Required for Branding Updates

## Required Image Assets

The following image assets need to be added to the `public/` folder:

### 1. `public/applogo.png` (REQUIRED)
- **Purpose**: Icon-only logo for header and browser favicon
- **Specifications**:
  - Icon-only design (house + node, no wordmark)
  - Transparent background
  - Recommended: 512x512px master (for favicon generation)
  - Will be displayed at 32x32px in header
  - Colors: Use `ink` (#0D1B2A) or `primary` (#00C4B3) on transparent background
  - For consistency on white backgrounds, prefer `ink` for the icon

### 2. `app/icon.png` (RECOMMENDED)
- **Purpose**: Next.js auto-generated favicon
- **Specifications**:
  - Export from the 512x512px `applogo.png` master
  - Next.js will automatically wire this as the favicon
  - Standard favicon sizes (16x16, 32x32, 48x48)

### 3. `public/logo.png` (OPTIONAL - if replacing)
- **Purpose**: Full wordmark logo (if needed elsewhere)
- **Specifications**:
  - Recolored to match brand tokens
  - Transparent background
  - Use `ink` (#0D1B2A) or `primary` (#00C4B3) for text
  - Currently referenced in Header but will be replaced by `applogo.png`

## Current Status

✅ All code has been updated to reference these assets:
- Header uses `/applogo.png`
- Favicon metadata points to `/applogo.png`
- Buttons use primary brand color (#00C4B3)
- All images have minimalist filters applied
- All teal colors replaced with brand tokens

⚠️ **Action Required**: Add `public/applogo.png` and optionally `app/icon.png` before deploying.

## Brand Token Reference

- **primary**: `#00C4B3` - Used for buttons, hovers, accents
- **ink**: `#0D1B2A` - Used for text, icons, default links
- **muted**: `#5B6170` - Used for secondary text
- **accent**: `#FFB600` - Available for special highlights
- **bg**: `#FFFFFF` - White background
- **bgAlt**: `#F5F7F8` - Alternate background
- **border**: `#E5E7EB` - Border color

