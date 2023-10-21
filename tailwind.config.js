/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  backgroundColor: {
    light: 'white',
    dark: '#1e1e1e',
  },
  plugins: [require("daisyui")],
}

