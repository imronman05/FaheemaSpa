/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'bottom': 'bottom',
      'right-top': 'top right -25em',
      'lg': 'top right -8em'
    },
    backgroundImage:{
      'hero': "url('./src/assets/image/bg.svg')"
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '30%' : '30%',
      '35%': '35%',
      '40%': '40%',
      '110%': '110%'
    }
  },
  plugins: [],
}
