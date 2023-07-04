/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#4d5ad6"
      },
      fontFamily: {
        sans: ["PT Mono", "monospace"],
        serif: ["PP Mondwest", "sans-serif"],
        heading: ["Borna", "monospace"]
      }
    },
  },
  plugins: [],
}

