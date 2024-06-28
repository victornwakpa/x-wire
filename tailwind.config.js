/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: "#F21212",
        secondary: "#FB8030",
        "gray-10": "#2E2E2E",
        "title-color": "#2A2A2A",
        "lighter": "#888888",
        "light": "#545454",
        "bgColor": "#F8F8FA", 
        "primary-20": "#fcdede",

        // DARK MODE
        "primary-d20": "#812F2F",
        "bgColord": "#0F0303",
      },
      fontFamily: {
        "oleo": ["Oleo Script Swash Caps"],
        "nerko": ["Nerko One"]
      }
    },
  },
  plugins: [],
}

