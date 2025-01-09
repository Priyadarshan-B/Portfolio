/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{html,js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        customPurple: "#a5a6ff",
      }
    },
  },
  plugins: [],
}

