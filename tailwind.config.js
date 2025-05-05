/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7fb',
          100: '#cceff7',
          200: '#99dfef',
          300: '#66cfe7',
          400: '#33bfdf',
          500: '#0891B2', // Primary
          600: '#067a95',
          700: '#055e78',
          800: '#044158',
          900: '#022935',
        },
        secondary: {
          50: '#e9fcfa',
          100: '#d2f9f5',
          200: '#a5f3eb',
          300: '#78ede1',
          400: '#4be7d7',
          500: '#14B8A6', // Secondary
          600: '#11988a',
          700: '#0d7869',
          800: '#095047',
          900: '#042824',
        },
        accent: {
          50: '#fff7e6',
          100: '#feefcc',
          200: '#fdde99',
          300: '#fbce66',
          400: '#fabd33',
          500: '#F59E0B', // Accent
          600: '#cc8409',
          700: '#996407',
          800: '#664305',
          900: '#332102',
        },
        success: '#10B981',
        warning: '#FBBF24',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};