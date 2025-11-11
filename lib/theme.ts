/**
 * Theme utilities that read from CSS variables
 * Ensures light/dark mode changes without rebuild
 */

export const palette = {
  bg: 'var(--ip-bg)',
  fg: 'var(--ip-fg)',
  teal: 'var(--ip-teal)',
  navy: 'var(--ip-navy)',
  amber: 'var(--ip-amber)',
  muted: 'var(--ip-muted)',
  card: 'var(--ip-card)',
} as const;

export const brand = {
  teal: palette.teal,
  navy: palette.navy,
  amber: palette.amber,
} as const;

export type PaletteKey = keyof typeof palette;
export type BrandKey = keyof typeof brand;

