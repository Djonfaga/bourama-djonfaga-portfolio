/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10d7a8', // Codex Accent (Teal/Mint)
        secondary: '#d9a031', // Darker Gold for visibility on white
        dark: '#0f172a', // Slate 900 (Main Text)
        darker: '#f0fdf4', // Greenish White (Alt BG)
        card: '#ffffff', // White Card
        'card-hover': '#f8fafc', // Slate 50
        muted: '#64748b', // Slate 500
        light: '#ffffff', // Main BG
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'mesh': "radial-gradient(at 0% 0%, rgba(16, 215, 168, 0.15), transparent 50%), radial-gradient(at 100% 0%, rgba(217, 160, 49, 0.15), transparent 50%), radial-gradient(at 100% 100%, rgba(16, 215, 168, 0.1), transparent 50%), radial-gradient(at 0% 100%, rgba(217, 160, 49, 0.1), transparent 50%)",
      }
    },
  },
  plugins: [],
}