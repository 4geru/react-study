import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c40adf56 = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _2dbcd771 = () => interopDefault(import('../pages/prices/index.vue' /* webpackChunkName: "pages/prices/index" */))
const _687e2f1b = () => interopDefault(import('../pages/prices/sample.vue' /* webpackChunkName: "pages/prices/sample" */))
const _26e5c944 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/price",
    component: _c40adf56,
    name: "price"
  }, {
    path: "/prices",
    component: _2dbcd771,
    name: "prices"
  }, {
    path: "/prices/sample",
    component: _687e2f1b,
    name: "prices-sample"
  }, {
    path: "/",
    component: _26e5c944,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
