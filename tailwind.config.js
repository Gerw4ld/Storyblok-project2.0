/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      lg: "1280px",
    },
    minHeight: {
      400: "400",
      560: "560",
      760: "760",
    },
    extend: {
    },
  },
  plugins: [],
}
