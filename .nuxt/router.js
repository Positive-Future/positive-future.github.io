import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55fb2804 = () => interopDefault(import('..\\pages\\contest.vue' /* webpackChunkName: "pages/contest" */))
const _a1748588 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ec91e562 = () => interopDefault(import('..\\pages\\privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _2488b80f = () => interopDefault(import('..\\pages\\resources.vue' /* webpackChunkName: "pages/resources" */))
const _ba54d2b0 = () => interopDefault(import('..\\pages\\who.vue' /* webpackChunkName: "pages/who" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contest",
    component: _55fb2804,
    name: "contest___en"
  }, {
    path: "/fr",
    component: _a1748588,
    name: "index___fr"
  }, {
    path: "/privacy_policy",
    component: _ec91e562,
    name: "privacy_policy___en"
  }, {
    path: "/resources",
    component: _2488b80f,
    name: "resources___en"
  }, {
    path: "/who",
    component: _ba54d2b0,
    name: "who___en"
  }, {
    path: "/fr/contest",
    component: _55fb2804,
    name: "contest___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _ec91e562,
    name: "privacy_policy___fr"
  }, {
    path: "/fr/resources",
    component: _2488b80f,
    name: "resources___fr"
  }, {
    path: "/fr/who",
    component: _ba54d2b0,
    name: "who___fr"
  }, {
    path: "/",
    component: _a1748588,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
