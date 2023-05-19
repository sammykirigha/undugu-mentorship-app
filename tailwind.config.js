/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f2757",
        blue: "#2b2b5c",
        darkBlue: "#151538",
        text: "#ff6100",
        textWhite: "white",
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],

  // main color bg-color: #0f2757
  // text color: white and #ff6100
};
