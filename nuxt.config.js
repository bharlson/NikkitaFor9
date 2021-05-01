export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nikkita Oliver for Seattle City Council, Position 9.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'  },
      { hid: 'description', name: 'description', content: 'Nikkita 4 Nine' },
      { name: 'og:url', content: 'https://nikkita4nine.com' },
      { name: 'og:image', content: 'https://nikkita4nine.com/title-card.jpg' }
      // { name: 'og:type', content: 'website' },
      // { name: 'og:title', content: 'Nikkita Oliver for Seattle City Council' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description },
      // { hid: 'twitter:title', name: 'twitter:title', content:'Nikkita Oliver for Seattle City Council' },
      // { hid: 'twitter:card', name: 'twitter:card', content:'https://nikkita4nine.com/title-card.jpg' },
      // { hid: 'twitter:description', name: 'twitter:description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/gif', href: '/favicon.gif' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/variables.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'
  ],

  styleResources: {
    scss: ['./assets/css/*.scss']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss']
,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    ['storyblok-nuxt', {
      // accessToken: process.env.STORYBLOK_TOKEN,
      accessToken: 'TSd7ee3r2Vyv55m2XN5tBQtt',
      cacheProvider: 'memory'
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    ssr: false,
    target: 'server'
  }
}
