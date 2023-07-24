/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#4d5ad6",
        "primary-light": "#E0E3FF",
        "white-shade": "#FFF8E8",
        "background-light": "#E7EAEC",
        "background-dark": "#06050C"
      },
      fontFamily: {
        sans: ["PT Mono", "monospace"],
        serif: ["VT323", "serif"],
        heading: ["Roboto Condensed", "monospace"]
      }
    },
  },
  plugins: [],
}

