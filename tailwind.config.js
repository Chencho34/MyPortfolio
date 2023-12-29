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
      backgroundColor: {
        'dark': '#121212',
        'light': 'rgb(241,245, 249)',
      },
      textColor: {
        'primary': 'rgb(107,114,128)',
        'secondary': 'rgb(33,150,243)',
      }
    },
  },
  plugins: [],
}

