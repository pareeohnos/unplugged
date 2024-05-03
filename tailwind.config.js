/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            proxima: ['sans-serif', 'system-ui'],
            sans: ['"Source Sans 3"', 'sans-serif', 'system-ui'],
            mincho: ['sans-serif', 'system-ui'],
            title: ['"Playfair Display"', 'sans-serif', 'system-ui'],
            sourcesans: ['"Source Sans 3"', 'serif', 'system-ui'],
        },

        extend: {},
    },
    plugins: [],
}
