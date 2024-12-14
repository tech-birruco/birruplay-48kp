/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9ec',
          100: '#fff3d6',
          200: '#ffe4ad',
          300: '#ffd180',
          400: '#ffb84d',
          500: '#ff9f1c',
          600: '#ff8400',
          700: '#cc6a00',
          800: '#a35400',
          900: '#854400'
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd4fd',
          400: '#36bffa',
          500: '#0ca5e9',
          600: '#0284c7',
          700: '#036ba1',
          800: '#075985',
          900: '#0c4a6e'
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843'
        }
      }
    },
  },
  plugins: [],
};