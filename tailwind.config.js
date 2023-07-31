/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '996px',
      xl: '1024px',
      lg: '1200px',
    },
    fontFamily: {
      'sans': ["SFPro", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}


