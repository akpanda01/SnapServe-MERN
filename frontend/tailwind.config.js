/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    primaryColor: "#064045",
    tealColor: "#0ba3ba",
    purpleColor: "#9771FF",
    irisBlueColor: "#5bd3de",
    headingColor: "#181e1e",
    textColor: "#2e3236",
  },

  boxShadow: {
    panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  },
},
},
  plugins: [],
}

