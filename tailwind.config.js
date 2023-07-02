/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
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
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../../public/image-2.jpg')",
        "hero-pattern-two": "url('../../public/image-2-crop.jpg')",
        "contact-bg-pattern": "url('../../public/Mentors_2.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), require("flowbite/plugin"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],

  // main color bg-color: #0f2757
  // text color: white and #ff6100
};
