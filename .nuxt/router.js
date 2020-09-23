import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08890ee2 = () => interopDefault(import('../pages/contest.vue' /* webpackChunkName: "pages/contest" */))
const _1dc06dc0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _766221eb = () => interopDefault(import('../pages/privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _de1b9c1a = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))
const _12c94b8c = () => interopDefault(import('../pages/who.vue' /* webpackChunkName: "pages/who" */))

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
    component: _08890ee2,
    name: "contest___en"
  }, {
    path: "/fr",
    component: _1dc06dc0,
    name: "index___fr"
  }, {
    path: "/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___en"
  }, {
    path: "/resources",
    component: _de1b9c1a,
    name: "resources___en"
  }, {
    path: "/who",
    component: _12c94b8c,
    name: "who___en"
  }, {
    path: "/fr/contest",
    component: _08890ee2,
    name: "contest___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___fr"
  }, {
    path: "/fr/resources",
    component: _de1b9c1a,
    name: "resources___fr"
  }, {
    path: "/fr/who",
    component: _12c94b8c,
    name: "who___fr"
  }, {
    path: "/",
    component: _1dc06dc0,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
