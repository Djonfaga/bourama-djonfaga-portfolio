/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E', // Teal 700
        secondary: '#0D9488', // Teal 600
        dark: '#0F172A', // Slate 900
        light: '#F1F5F9', // Slate 100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
