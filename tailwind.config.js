/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Grayscale Palette Custom Aliases if needed, 
        // though standard utility classes map perfectly to requirements.
        mono: {
          bg: '#000000',
          text: '#FFFFFF',
          muted: '#A0A0A0',
          accent: '#505050'
        }
      }
    },
  },
  plugins: [],
}