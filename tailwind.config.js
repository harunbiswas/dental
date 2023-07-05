/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9282C4",
        "primary-1": "#532563",
        secendry: "rgb(17,96,137)",
        ternary: "#532563",
        text: "rgb(102,102,102)",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
