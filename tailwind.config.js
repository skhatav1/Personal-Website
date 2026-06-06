/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0,0,0,0.35)',
        amber: '0 0 40px rgba(251,191,36,0.12)',
        'amber-lg': '0 16px 42px rgba(251,191,36,0.18)',
      },
    },
  },
  plugins: [],
};
