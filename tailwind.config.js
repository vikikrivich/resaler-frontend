/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'gray-light': '#D9D9D9',
      'gray-middle': '#A7A6A6',
      'gray-dark': '#969696',
      'red-matt': '#A84D4D',
      'red-bright': '#973737',
      'red-dark': '#802626',
      'blue-light': '#EBF8FF',
      'orange-matt': '#FFBD80',
    },
    extend: {},
  },
  plugins: [],
}

