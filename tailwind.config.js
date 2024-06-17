/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F21212",
        secondary: "#FB8030",
        "title-color": "#2A2A2A",
        "lighter": "#888888",
        "light": "#545454",
        "bgColor": "#F8F8FA", 
      },
      fontFamily: {
        "oleo": ["Oleo Script Swash Caps"],
        "nerko": ["Nerko One"]
      }
    },
  },
  plugins: [],
}

