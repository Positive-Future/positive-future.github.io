// TODO: Ensure everything is minified/ugligied
import colors from 'vuetify/es5/util/colors'
import languages from './static/lang/languages.js'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  generate: {
    fallback: true,
  },
  head: {
    htmlAttrs: {
      dir: 'ltr',
    },
    titleTemplate: 'Positive Future',
    title: 'Positive Future',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Climate change and pollution, the acceleration of the digital revolution, an aging population, social tensions and pandemics are forcing us to review our models of society and start thinking today about the "world to come". To do this, we need to be able to draw on visions of desirable futures that can mobilize energies to bring about positive change.',
      },
      // Facebook
      { property: 'author', content: process.env.AUTHOR },
      { property: 'og:site_name', content: process.env.URL },
      { property: 'og:locale', content: 'en_US' }, // TODO: update
      { property: 'og:type', content: 'website' }, // TODO: update
      // Twitter
      { property: 'twitter:site', content: process.env.URL }, // TODO: update
      { property: 'twitter:domain', content: process.env.URL },
      { property: 'twitter:creator', content: process.env.AUTHOR },
      { property: 'twitter:card', content: 'summary' }, // TODO: update
      { property: 'twitter:image:src', content: '/images/logo.png' }, // TODO: update
      { property: 'og:url', content: process.env.URL },
      { property: 'og:title', content: process.env.title },
      { property: 'og:description', content: process.env.desc },
      { name: 'twitter:site', content: process.env.URL },
      { name: 'twitter:card', content: 'summary_large_image' }, // TODO: update
      { name: 'twitter:image', content: process.env.LOGO },
      { property: 'og:image', content: process.env.LOGO },
      { property: 'og:image:width', content: '1200' }, // TODO: update
      { property: 'og:image:height', content: '630' }, // TODO: update
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
  server: {
    port: 3000, // par défaut: 3000
    host: '0.0.0.0', // par défaut: localhost
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // TODO: update with shared versions
    { src: '~plugins/i18n-config.js' },
  ] /*   { src: '~plugins/ga.js', mode: 'client' }, */,
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        // Options
        // to make it seo friendly remove below line and add baseUrl option to production domain
        seo: false,
        // baseUrl: 'https://my-nuxt-app.com',
        lazy: true,
        locales: languages,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
        },
        langDir: 'static/lang/',
      },
    ],
  ],

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // MODULES CONFIGURATIONS
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  /*
   ** Google Analytics module configuration
   ** https://github.com/nuxt-community/analytics-module
   ** https://matteogabriele.gitbooks.io/vue-analytics/content/
   */
  googleAnalytics: {
    id: 'UA-192949805-1',
    /*    dev: false,
       debug: {
         enabled: true,
         sendHitTask: true
       } */
  },
  /*
   ** PWA module configuration
   ** https://pwa.nuxtjs.org/setup#configuration
   */
  pwa: {
    manifest: {
      name: process.env.NAME,
      lang: 'en',
    },
  },

  /*
   ** Sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module#setup-a-sitemap
   */
  sitemap: {
    hostname: 'https://positive-future.org',
    gzip: true,
    /* TODO : add hooks to include featured projects
     ** into the sitemap (dynamic routes).
     ** See https://github.com/nuxt-community/sitemap-module#hooks
     */
    exclude: [],
  },
  /*
   ** loading feature configuration
   ** https://nuxtjs.org/guides/features/loading
   */
  loading: {
    color: '#00c2cb',
    height: '4px',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#00c2cb',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
        dark: {
          primary: colors.blue,
          accent: colors.grey.darken3,
          secondary: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.darken3,
          error: colors.deepOrange.darken3,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Styles-resources module configuration
   ** https://github.com/nuxt-community/style-resources-module#readme
   */
  styleResources: {
    scss: ['./assets/*.scss'],
  },
  /*
   ** Web font loader module configuration
   ** https://github.com/Developmint/nuxt-webfontloader#readme
   */
  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Poppins:600,800'],
    },
  },
  /*
   ** robots module configuration
   ** https://github.com/nuxt-community/robots-module#options
   */
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
  /*
   ** Page Layout transition
   ** https://nuxtjs.org/guides/features/transitions#the-layouttransition-property
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('TRANSITION : Before enter...')
    },
    afterLeave(el) {
      console.log('TRANSITION : afterLeave', el)
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
