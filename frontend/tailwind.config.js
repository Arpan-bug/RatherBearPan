// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 This enables class-based dark mode (required for next-themes)
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // optional if you're using the /app directory
  ],
  theme: {
    extend: {
      // You can put your custom colors, spacing, etc. here if needed
    },
  },
  plugins: [],
};
