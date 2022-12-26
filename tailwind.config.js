/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accentLightBG: "#1c2236",
        accentDarkBG: "#181d2e",
        accentColor: "#881337",
        accentLight: "#88133722",
      },
    },
  },
  plugins: [],
});
