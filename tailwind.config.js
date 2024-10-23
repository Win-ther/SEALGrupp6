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
                'old-green': '#babd8d',
                'old-black': '#aeae98',
                'button-green': '#c1c491',
                'hardwood': '#937A62'
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
        screens: {
            'desktop': '700px',
            'caretaViewT': '700px',
            'caretaViewD': '950px',
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

