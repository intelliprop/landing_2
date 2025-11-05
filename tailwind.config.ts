import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C4B3',
        ink: '#0D1B2A',
        muted: '#5B6170',
        accent: '#FFB600',
        bg: '#FFFFFF',
        bgAlt: '#F5F7F8',
        border: '#E5E7EB'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;


