/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,tsx,vue,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                'sooty-yellow': '#ece5cf',
                'old-red': '#ffdac6',
                'old-yellow': '#ffe7c2',
                'old-green': '#babd8d',
                'old-blue': '#d8e2dc',
                'old-black': '#aeae98'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

