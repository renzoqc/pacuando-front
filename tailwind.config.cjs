/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{astro,svelte,css,js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },

    fontFamily: {
      titillium: ['Titillium Web', 'Noto Sans', 'sans-serif']
    },

    colors: {
      primary: '#FF8834',

      error: '#DE3534',
      'light-blue': '#F7FAFF',
      'sky-blue': '#E1F2FF',
      blue: '#006BFF',
      'light-gray': '#D0D0D0',
      gray: '#888888',

      white: '#FFF',
      black: '#26262E',
      transparent: 'transparent'
    }
  },
  plugins: []
}
