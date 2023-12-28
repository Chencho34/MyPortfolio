/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': 'url(\'/src/assets/bg.jpg\')',
        'projects': 'url(\'/src/assets/bgs.svg\')'
      },
      textColor: {
        'primary-text': '#161616',
      }
    },
  },
  plugins: [],
}

