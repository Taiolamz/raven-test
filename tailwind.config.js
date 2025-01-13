/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
