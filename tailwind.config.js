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

        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [],
}
