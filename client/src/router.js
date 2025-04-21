import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    children: [
      {
        path: 'request-for-quotes',
        name: 'Request For Quotes',
        component: loadPage('RequestForQuotesPage')
      },
      {
        path: 'products',
        name: 'Products',
        component: loadPage('ProductsPage')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: loadPage('LoginPage')
  },

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
