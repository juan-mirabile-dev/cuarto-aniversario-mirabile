/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "institutional" : "#121212",
        "base" : "#FFFFFF",
        "muted" : "#C2C2C2"
      }
    },
  },
  plugins: [],
} 