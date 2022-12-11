/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans"],
      },
      colors: {
        darkElements: "hsl(209, 23%, 22%)",
        darkBackground: "hsl(207, 26%, 17%)",
        darkText: "hsl(0, 0%, 100%)",
      },
    }, //can be used to add more css variables manually into tailwind
  },
  plugins: [],
};
