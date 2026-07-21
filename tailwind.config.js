/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        surface: '#13131C',
        'surface-2': '#1B1B28',
        border: 'rgba(255,255,255,0.08)',
        'border-strong': 'rgba(255,255,255,0.16)',
        text: {
          primary: '#F4F4F6',
          secondary: '#A6A6B3',
          muted: '#6E6E7C',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#6D28D9',
        },
        amber: {
          DEFAULT: '#F5B942',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Source Serif 4"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      },
    },
  },
  plugins: [],
}
