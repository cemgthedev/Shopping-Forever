/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      boxShadow: {
        'menu': '0 0 10px 2px #06b6d4',
        'card': '0 0 10px 2px #4b5563'
      }
    },
  },
  plugins: [],
}
