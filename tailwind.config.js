/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgMain:"#6f42c11a",
        main:"#6f42c1",
        White:"#FFFFFF",
        Black:"#282828",
        Gray:"#747579",
        bgBlack:"#1d3b531a"
      }
    },
  },
  plugins: [],
};
