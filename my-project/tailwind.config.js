/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "inst-base" : "#121212",
        "inst-card" : "#171717",
        "base" : "#FFFFFF",
        "muted" : "#C2C2C2"
      }
    },
  },
  plugins: [],
} 