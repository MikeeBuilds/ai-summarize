/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
      }
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        inter: ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}