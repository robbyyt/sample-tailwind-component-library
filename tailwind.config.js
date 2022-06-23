/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
      "dark-gray": "#3F3F3F",
      "light-gray":"#ABABAB",
      "dark": "#303030",
      "light": "#EBEAE8",
      "light-accent": "#D4D0CC",
      }
    },
  },
  plugins: [],
}
