const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#006880',
        secondary: '#00BAD6',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
