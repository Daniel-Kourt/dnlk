module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'primary': '#081845',
        'secondary': '#4ac5ee',
        'third': '#3b9fbe',
        'dark': '#5462a3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
