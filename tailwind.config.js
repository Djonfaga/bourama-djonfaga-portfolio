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
        secondary: '#f5b841', // Codex Accent 2 (Gold/Yellow)
        dark: '#050c18', // Codex BG
        darker: '#0a1f1c', // Greenish Dark
        card: 'rgba(255, 255, 255, 0.04)',
        'card-hover': 'rgba(255, 255, 255, 0.08)',
        muted: '#9bb1d1',
        light: '#e6edf7', // Codex Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'mesh': "radial-gradient(at 0% 0%, rgba(16, 215, 168, 0.15), transparent 50%), radial-gradient(at 100% 0%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(at 100% 100%, rgba(16, 215, 168, 0.1), transparent 50%), radial-gradient(at 0% 100%, rgba(255, 255, 255, 0.05), transparent 50%)",
      }
    },
  },
  plugins: [],
}