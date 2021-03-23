module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      dark: '#272727',
      black: '#272727',
      gray: '#f0f0f0',
      white:'#ffffff',
      blue: '#00e6ed'
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  corePlugins:{
    listStyleType: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
