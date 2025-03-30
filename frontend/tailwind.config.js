/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enables dark mode via class on <html>
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',     // ✅ Pages
    './components/**/*.{js,ts,jsx,tsx}', // ✅ Components
    './app/**/*.{js,ts,jsx,tsx}',        // (if using app/ directory in future)
  ],
  theme: {
    extend: {
      // Add any custom colors, fonts, etc. here
    },
  },
  plugins: [
    // Add plugins here if needed (e.g., forms, typography)
  ],
};
