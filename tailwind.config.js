/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
    require("flowbite/plugin")
  ],

  // main color bg-color: #0f2757
  // text color: white and #ff6100
};
