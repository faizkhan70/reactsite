/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto"],
        'sanss': ["Montserrat"]
      },

      screens:{
        xxl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
    
        lx: { max: "1079px" },
        // => @media (max-width: 1279px) { ... }
    
        gl: { max: "890px" },
        // => @media (max-width: 1023px) { ... }
    
        dm: { max: "467px" },
        // => @media (max-width: 767px) { ... }
    
        ms: { max: "380px" },
        // => @media (max-width: 639px) { ... }
        // mss: { max: "639px",min:'320px' },
        sx: { max: "220px" },
        // => @media (max-width: 479px) { ... }
    },

    },
  },
  plugins: [],
}

