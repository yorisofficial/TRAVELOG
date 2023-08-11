/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter'],
      },
      colors: {
        'primary': '#5D50C6',
        'primary-hover': '#4A3CBA',
        'secondary': '#F85E9F',
        'orange': '#FF5722',
      }
    },
  },
  plugins: [],
}

