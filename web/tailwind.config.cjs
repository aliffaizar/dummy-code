/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  theme: {},
  daisyui: {
    themes: ['night'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
