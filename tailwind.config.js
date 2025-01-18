/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      kavoon: ['Kavoon', 'cursive'],
    },
    extend: {
      colors:{
        white: '#ffffff',
        black: '#000000',
        green:'#08b100',
        grey: '#dddddd'
      }
    },
  },
  plugins: [],
}

