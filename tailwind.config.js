/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Sans': ['Open Sans', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Robboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
