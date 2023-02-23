/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
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
      '110%': '110%'
    }
  },
  plugins: [],
}
