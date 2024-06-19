/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        11 : '2.75rem',
        12 : '3rem',
        13 : '3.25rem',
        14 : '3.5rem',
      }
    },
  },
  plugins: [],
}

