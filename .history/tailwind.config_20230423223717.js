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
        
      }
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        inter: ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}