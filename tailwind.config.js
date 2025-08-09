/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'patriot': {
          red: '#8B0000',
          'red-light': '#DC143C',
          white: '#FAFAFA',
          'white-cream': '#F5F5F5',
          gold: '#FFD700',
          'gold-dark': '#DAA520',
          green: '#228B22',
        }
      },
      animation: {
        'wave': 'wave 2s ease-in-out infinite',
        'flag-wave': 'flag-wave 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        'flag-wave': {
          '0%, 100%': { transform: 'skew(0deg, 0deg)' },
          '25%': { transform: 'skew(1deg, 0deg)' },
          '50%': { transform: 'skew(0deg, 1deg)' },
          '75%': { transform: 'skew(-1deg, 0deg)' },
        },
      },
      backgroundImage: {
        'gradient-patriot': 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FAFAFA 100%)',
        'gradient-red-white': 'linear-gradient(135deg, #DC143C 0%, #ffffff 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)',
      },
      boxShadow: {
        'patriot': '0 10px 25px -5px rgba(139, 0, 0, 0.25), 0 10px 10px -5px rgba(139, 0, 0, 0.04)',
        'red-glow': '0 0 20px rgba(220, 20, 60, 0.5)',
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [],
};