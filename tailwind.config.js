/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563eb",
          secondary: "#10b981",
          accent: "#f59e0b"
        }
      },
      screens: {
        xs: "480px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px"
      }
    }
  },
  plugins: []
}