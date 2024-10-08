import plugin from "tailwindcss";

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
                'button-green': '#c1c491',
                'old-peach': '#FFDAB9',
                //'button-green': '#d0d49f'
                //'button-green': '#c6c99b'
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
        screens: {
            'desktop': '700px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}

