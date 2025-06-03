/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#ADD6FF',
          300: '#84C1FF',
          400: '#5BABFF',
          500: '#3295FF',
          600: '#1A73E8',
          700: '#1A365D',
          800: '#0F2B4A',
          900: '#091E34',
        },
        secondary: {
          50: '#EFFCF9',
          100: '#DEF9F3',
          200: '#BDF2E8',
          300: '#9CEBDD',
          400: '#56D9C1',
          500: '#0D9488',
          600: '#0B8A7F',
          700: '#0A7A71',
          800: '#085F58',
          900: '#064E48',
        },
        accent: {
          50: '#FFFAEB',
          100: '#FFF1C6',
          200: '#FFE29D',
          300: '#FED373',
          400: '#FDC54A',
          500: '#F59E0B',
          600: '#D97A06',
          700: '#B45D05',
          800: '#924A04',
          900: '#783C03',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};