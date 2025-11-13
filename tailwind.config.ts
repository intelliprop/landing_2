import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
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
        border: '#E5E7EB',
        // Dark mode colors
        dark: {
          bg: '#0D1B2A',
          bgAlt: '#1A2937',
          ink: '#FFFFFF',
          muted: '#9CA3AF',
          border: '#374151',
          primary: '#00C4B3',
          accent: '#FFB600'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
};

export default config;


