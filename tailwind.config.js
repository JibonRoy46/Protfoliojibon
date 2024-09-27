/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#000000",
        designColor:"#4A68FE",
        darkText:"#b2c4f7",
        lightText:"#04B6D6",
        hoverColor:"#31363E"
      },
      fontFamily:{
        bodyFont:["Montserrat","sans-serif"]
      }
    },
  },
  plugins: [],
}