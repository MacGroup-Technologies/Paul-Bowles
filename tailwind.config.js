/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
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

