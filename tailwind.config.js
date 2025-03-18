/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'tangerine': ['"Tangerine"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
