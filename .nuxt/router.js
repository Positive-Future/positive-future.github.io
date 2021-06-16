import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b4ed1488 = () => interopDefault(import('../pages/apply.vue' /* webpackChunkName: "pages/apply" */))
const _1dc06dc0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b8e33d90 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _13d83695 = () => interopDefault(import('../pages/next.vue' /* webpackChunkName: "pages/next" */))
const _766221eb = () => interopDefault(import('../pages/privacy_policy.vue' /* webpackChunkName: "pages/privacy_policy" */))
const _3dfec224 = () => interopDefault(import('../pages/resourceList.vue' /* webpackChunkName: "pages/resourceList" */))
const _de1b9c1a = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))
const _35423e98 = () => interopDefault(import('../pages/thank_you.vue' /* webpackChunkName: "pages/thank_you" */))
const _6fbadbf0 = () => interopDefault(import('../pages/about/organizers.vue' /* webpackChunkName: "pages/about/organizers" */))
const _1faf5282 = () => interopDefault(import('../pages/about/scientific_advisory_board.vue' /* webpackChunkName: "pages/about/scientific_advisory_board" */))
const _1d3c118f = () => interopDefault(import('../pages/contest/jury.vue' /* webpackChunkName: "pages/contest/jury" */))
const _5ee22cec = () => interopDefault(import('../pages/contest/rules.vue' /* webpackChunkName: "pages/contest/rules" */))
const _a5026616 = () => interopDefault(import('../pages/contest/tips.vue' /* webpackChunkName: "pages/contest/tips" */))
const _bc508020 = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _2cbc9e27 = () => interopDefault(import('../pages/redirect/_lang/_id.vue' /* webpackChunkName: "pages/redirect/_lang/_id" */))

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
    path: "/apply",
    component: _b4ed1488,
    name: "apply___en"
  }, {
    path: "/fr",
    component: _1dc06dc0,
    name: "index___fr"
  }, {
    path: "/news",
    component: _b8e33d90,
    name: "news___en"
  }, {
    path: "/next",
    component: _13d83695,
    name: "next___en"
  }, {
    path: "/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___en"
  }, {
    path: "/resourceList",
    component: _3dfec224,
    name: "resourceList___en"
  }, {
    path: "/resources",
    component: _de1b9c1a,
    name: "resources___en"
  }, {
    path: "/thank_you",
    component: _35423e98,
    name: "thank_you___en"
  }, {
    path: "/about/organizers",
    component: _6fbadbf0,
    name: "about-organizers___en"
  }, {
    path: "/about/scientific_advisory_board",
    component: _1faf5282,
    name: "about-scientific_advisory_board___en"
  }, {
    path: "/contest/jury",
    component: _1d3c118f,
    name: "contest-jury___en"
  }, {
    path: "/contest/rules",
    component: _5ee22cec,
    name: "contest-rules___en"
  }, {
    path: "/contest/tips",
    component: _a5026616,
    name: "contest-tips___en"
  }, {
    path: "/fr/apply",
    component: _b4ed1488,
    name: "apply___fr"
  }, {
    path: "/fr/news",
    component: _b8e33d90,
    name: "news___fr"
  }, {
    path: "/fr/next",
    component: _13d83695,
    name: "next___fr"
  }, {
    path: "/fr/privacy_policy",
    component: _766221eb,
    name: "privacy_policy___fr"
  }, {
    path: "/fr/resourceList",
    component: _3dfec224,
    name: "resourceList___fr"
  }, {
    path: "/fr/resources",
    component: _de1b9c1a,
    name: "resources___fr"
  }, {
    path: "/fr/thank_you",
    component: _35423e98,
    name: "thank_you___fr"
  }, {
    path: "/fr/about/organizers",
    component: _6fbadbf0,
    name: "about-organizers___fr"
  }, {
    path: "/fr/about/scientific_advisory_board",
    component: _1faf5282,
    name: "about-scientific_advisory_board___fr"
  }, {
    path: "/fr/contest/jury",
    component: _1d3c118f,
    name: "contest-jury___fr"
  }, {
    path: "/fr/contest/rules",
    component: _5ee22cec,
    name: "contest-rules___fr"
  }, {
    path: "/fr/contest/tips",
    component: _a5026616,
    name: "contest-tips___fr"
  }, {
    path: "/fr/news/:slug",
    component: _bc508020,
    name: "news-slug___fr"
  }, {
    path: "/fr/redirect/:lang?/:id?",
    component: _2cbc9e27,
    name: "redirect-lang-id___fr"
  }, {
    path: "/news/:slug",
    component: _bc508020,
    name: "news-slug___en"
  }, {
    path: "/redirect/:lang?/:id?",
    component: _2cbc9e27,
    name: "redirect-lang-id___en"
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
