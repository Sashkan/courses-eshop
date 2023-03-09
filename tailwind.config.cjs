/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28536B",
        secondary: "#C2948A",
        tertiary: "#7EA8BE",
        accent1: "#F6F0ED",
        accent2: "#BBB193",
      },
    },
  },
  plugins: [],
};

module.exports = config;
