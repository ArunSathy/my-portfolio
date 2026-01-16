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
                title: "hsl(0, 0%, 20%)",
                "title-dark": "hsl(0, 0%, 0%)",
                text: "hsl(0, 0%, 46%)",
                body: "hsl(0, 0%, 98%)",
                container: "#fff",
            },
            fontFamily: {
                body: ["Poppins", "sans-serif"],
                logo: ["Delius", "cursive"],
            },
            fontSize: {
                big: "3.5rem",
                h1: "2.25rem",
                h2: "1.5rem",
                h3: "1.25rem",
                normal: "1rem",
                small: "0.875rem",
                smaller: "0.813rem",
                tiny: "0.625rem",
            },
            zIndex: {
                tooltip: "10",
                fixed: "100",
                modal: "1000",
            },
        },
    },
    plugins: [],
}
