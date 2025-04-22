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
        path: 'purchase-agreements',
        name: 'Purchase Agreements',
        component: loadPage('PurchaseAgreementsPage')
      },
      {
        path: 'purchase-orders',
        name: 'Purchase Orders',
        component: loadPage('PurchaseOrdersPage')
      },
      {
        path: 'products',
        name: 'Products',
        component: loadPage('ProductsPage')
      },
      {
        path: 'tallies',
        name: 'tallies',
        component: loadPage('TalliesPage')
      },
      {
        path: 'companies',
        name: 'Companies',
        component: loadPage('CompaniesPage')
      },
      {
        path: 'people',
        name: 'People',
        component: loadPage('PeoplePage')
      },
      {
        path: 'payments',
        name: 'Payments',
        component: loadPage('PaymentsPage')
      },
      {
        path: 'open-orders',
        name: 'Open Orders',
        component: loadPage('OpenOrdersPage')
      },
      {
        path: 'tracking-cards',
        name: 'Tracking Cards',
        component: loadPage('TrackingCardsPage')
      },
      {
        path: 'bill-of-lading',
        name: 'Bill of Lading',
        component: loadPage('BillOfLadingPage')
      },
      {
        path: 'users',
        name: 'Users',
        component: loadPage('UsersPage')
      },
      {
        path: 'site-settings',
        name: 'Site Settings',
        component: loadPage('SiteSettingsPage')
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
