/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#4d5ad6",
        "white-shade": "#FFF8E8"
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

