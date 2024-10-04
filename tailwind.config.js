/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx,vue,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica','Arial','sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

