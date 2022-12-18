const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-dev': '#16ABF8',
        'black-dev': '#111111',
        'grey-dev': '#888888',
      },
      boxShadow: {
        'devcode-1': '0px 4px 10px rgba(0, 0, 0, 0.1)',
        'devcode-2': '0px 6px 10px rgba(0, 0, 0, 0.1)',
      },
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    container: { center: true },
  },
  plugins: [],
}
