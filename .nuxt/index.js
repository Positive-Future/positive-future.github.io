import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_7a818f68 from 'nuxt_plugin_plugin_7a818f68' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_c1f3a4f4 from 'nuxt_plugin_plugin_c1f3a4f4' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_pluginrouting_bf52f4f0 from 'nuxt_plugin_pluginrouting_bf52f4f0' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_779392e7 from 'nuxt_plugin_pluginmain_779392e7' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_axios_219cd304 from 'nuxt_plugin_axios_219cd304' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_pluginclient_445d66e4 from 'nuxt_plugin_pluginclient_445d66e4' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_abd24f28 from 'nuxt_plugin_pluginserver_abd24f28' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_6af6641a from 'nuxt_plugin_workbox_6af6641a' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_meta_f17e33c0 from 'nuxt_plugin_meta_f17e33c0' // Source: ./pwa/meta.js (mode: 'all')
import nuxt_plugin_icons_4fd8260f from 'nuxt_plugin_icons_4fd8260f' // Source: ./pwa/icons.js (mode: 'all')
import nuxt_plugin_googleanalytics_e7693230 from 'nuxt_plugin_googleanalytics_e7693230' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_i18nconfig_ad306bc6 from 'nuxt_plugin_i18nconfig_ad306bc6' // Source: ../plugins/i18n-config.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"dir":"ltr"},"titleTemplate":"Positive Future","title":"Positive Future","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Climate change and pollution, the acceleration of the digital revolution, an aging population, social tensions and pandemics are forcing us to review our models of society and start thinking today about the \"world to come\". To do this, we need to be able to draw on visions of desirable futures that can mobilize energies to bring about positive change."},{"property":"author","content":undefined},{"property":"og:site_name","content":undefined},{"property":"og:locale","content":"en_US"},{"property":"og:type","content":"website"},{"property":"twitter:site","content":undefined},{"property":"twitter:domain","content":undefined},{"property":"twitter:creator","content":undefined},{"property":"twitter:card","content":"summary"},{"property":"twitter:image:src","content":"\u002Fimages\u002Flogo.png"},{"property":"og:url","content":undefined},{"property":"og:title","content":undefined},{"property":"og:description","content":undefined},{"name":"twitter:site","content":undefined},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:image","content":undefined},{"property":"og:image","content":undefined},{"property":"og:image:width","content":"1200"},{"property":"og:image:height","content":"630"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","sizes":"57x57","href":"\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-icon-180x180.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Fandroid-icon-192x192.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fmanifest.json"}],"link":[{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_7a818f68 === 'function') {
    await nuxt_plugin_plugin_7a818f68(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_c1f3a4f4 === 'function') {
    await nuxt_plugin_plugin_c1f3a4f4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_bf52f4f0 === 'function') {
    await nuxt_plugin_pluginrouting_bf52f4f0(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_779392e7 === 'function') {
    await nuxt_plugin_pluginmain_779392e7(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_219cd304 === 'function') {
    await nuxt_plugin_axios_219cd304(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_445d66e4 === 'function') {
    await nuxt_plugin_pluginclient_445d66e4(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_abd24f28 === 'function') {
    await nuxt_plugin_pluginserver_abd24f28(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_6af6641a === 'function') {
    await nuxt_plugin_workbox_6af6641a(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_f17e33c0 === 'function') {
    await nuxt_plugin_meta_f17e33c0(app.context, inject)
  }

  if (typeof nuxt_plugin_icons_4fd8260f === 'function') {
    await nuxt_plugin_icons_4fd8260f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_e7693230 === 'function') {
    await nuxt_plugin_googleanalytics_e7693230(app.context, inject)
  }

  if (typeof nuxt_plugin_i18nconfig_ad306bc6 === 'function') {
    await nuxt_plugin_i18nconfig_ad306bc6(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
