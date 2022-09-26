/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        greybg: "#353F47",
        whiteTxt: "#F0F0F0",
        bluishGreyBtn: "#242B33",
        blackbg: "#00040D",
        platziblue: "#24385B",
        contactbg: "#242B33",
        contactTitlebg: "#353F47",
        blackBtn: "#00040D"
      }
    },
  },
  plugins: [],
}
