/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ccff00', // Original bright fluorescent yellow
        'primary-readable': '#99cc00', // Darker fluorescent yellow for better readability
      },
    },
  },
  plugins: [],
};
