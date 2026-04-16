/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#274029',
        secondary: '#9B1D20',
        accent: '#C1E3FE',
        accent2: '#94C595',
        background: '#FAF2EE',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        'climate-crisis': ['Climate Crisis', 'sans-serif'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
