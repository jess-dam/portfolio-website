/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#05276C',
        'secondary': '#FFA462',
        'accent': '#F8D179',
        'black': '#000000',
        'white': '#ffffff'
      },
      fontFamily: {
        'climate-crisis': ['Climate Crisis', 'sans-serif'],
        'poppins': ['Poppins']
      }
    },
  },
  plugins: [],
}

