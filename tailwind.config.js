/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Important: Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        fontLight: "#151531",
        smallFontLight: "#9296aa",
        buttonLight: "#2a304c",
        darkBackground: "#1b1e2b",
        fontDark: "#f0f2f6",
        smallFontDark: "#d1d5e7",
        buttonDark: "#383f5b",
        darkModal: "#1f1f1f",
        darkBox: "#1e2633", 
      },
    },
  },
  plugins: [],
}