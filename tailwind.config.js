/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#DC4492",
        yellow:"#FDCC49",
        grey:"#ededed",
      },
      fontFamily:{
        poppins:["poppins","sans-serif"]
      },
      content:{
        brush: "url('./assets/brush.png')",
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}
