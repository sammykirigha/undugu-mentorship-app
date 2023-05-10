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
        text: "#ff6100",
        textWhite: "white",
      },
    },
  },
  backgroundImage: {
    "bg-hero-image": "url('./public/home-page-photo.jpg')",
  },
  plugins: [],

  // main color bg-color: #0f2757
  // text color: white and #ff6100
};
