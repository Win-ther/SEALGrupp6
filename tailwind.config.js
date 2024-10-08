/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,tsx,vue,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Playfair Display"'],
                logo: ['"Dancing Script"']
            },
            colors: {
                'sooty-yellow': '#ece5cf',
                'old-red': '#ffdac6',
                'old-yellow': '#ffe7c2',
                'old-green': '#babd8d',
                'old-blue': '#d8e2dc',
                'old-black': '#aeae98',
                'button-green': '#c1c491'
                //'button-green': '#d0d49f'
                //'button-green': '#c6c99b'
            },
        },
        screens: {
            'desktop': '700px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

