/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#f87171',
          400: '#ef4444',
          500: '#B91C1C',
          600: '#991B1B',
          700: '#7F1D1D',
          800: '#6B0505',
          900: '#450A0A',
        },
        navy: {
          50:  '#fdf6f6',
          100: '#f5e0e0',
          200: '#e8b8b8',
          300: '#d08080',
          400: '#b84040',
          500: '#8B1A1A',
          600: '#5C0E0E',
          700: '#3D0808',
          800: '#280505',
          900: '#1A0303',
          DEFAULT: '#1A0303',
        },
        gold: '#C9A030',
        cream: '#FAF5EE',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Hind', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
