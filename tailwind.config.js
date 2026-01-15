/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'lg': { 'max': '992px' },
            'md': { 'max': '768px' },
            'sm': { 'max': '576px' },
            'xs': { 'max': '350px' },
        },
        extend: {
            colors: {
                title: "var(--title-color)",
                "title-dark": "var(--title-color-dark)",
                text: "var(--text-color)",
                body: "var(--body-color)",
                container: "var(--container-color)",
            },
            fontFamily: {
                body: ["var(--body-font)", "sans-serif"],
            },
            fontSize: {
                big: "var(--big-font-size)",
                h1: "var(--h1-font-size)",
                h2: "var(--h2-font-size)",
                h3: "var(--h3-font-size)",
                normal: "var(--normal-font-size)",
                small: "var(--small-font-size)",
                smaller: "var(--smaller-font-size)",
                tiny: "var(--tiny-font-size)",
            },
            zIndex: {
                tooltip: "var(--z-tooltip)",
                fixed: "var(--z-fixed)",
                modal: "var(--z-modal)",
            },

        },
    },
    plugins: [],
}
