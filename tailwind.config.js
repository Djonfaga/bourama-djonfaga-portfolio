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
        darker: '#0b1626', // Codex BG 2
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
        'mesh': "radial-gradient(at 20% 20%, rgba(16, 215, 168, 0.15), transparent 50%), radial-gradient(at 80% 10%, rgba(245, 184, 65, 0.12), transparent 45%), radial-gradient(at 60% 80%, rgba(60, 120, 255, 0.12), transparent 55%)",
      }
    },
  },
  plugins: [],
}