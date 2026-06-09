/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#13131f',
          600: '#1a1a2e',
          500: '#16213e',
          400: '#1f2937',
        },
        accent: {
          cyan:   '#06b6d4',
          purple: '#8b5cf6',
          pink:   '#ec4899',
        }
      },
      animation: {
        'fade-in-up':   'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in':      'fadeIn 0.8s ease-out forwards',
        'slide-in-left':'slideInLeft 0.6s ease-out forwards',
        'slide-in-right':'slideInRight 0.6s ease-out forwards',
        'bounce-slow':  'bounce 3s infinite',
        'pulse-slow':   'pulse 4s infinite',
        'spin-slow':    'spin 8s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
        'typing':       'typing 3.5s steps(30, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(99,102,241,0.8), 0 0 80px rgba(99,102,241,0.3)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-gradient-radial': {
          'background-image': 'radial-gradient(var(--tw-gradient-stops))',
        },
      })
    }
  ],
}
