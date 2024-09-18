/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      customFont: ['"Bree Serif", "serif"'],
      paraFont: ['"Moderustic", "sans-serif"'],
    },
  },
  plugins: [],
};
