import { reactive } from 'vue'
import { Product } from './models/Product.js'
import { Person } from './models/Person.js'
import { Company } from './models/Company.js'
import { Contact } from './models/Contact.js'
import { Pop } from './utils/Pop.js'
import { logger } from './utils/Logger.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})


export const TestState = reactive({

  siteNavigation: [
    // sales
    {
      name: 'Request For Quote',
      alias: 'RFQ',
      icon: 'mdi-file-question',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'Purchase Agreements',
      alias: 'PA',
      icon: 'mdi-file-document-check',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'Purchase Orders',
      alias: 'PO',
      icon: 'mdi-clipboard-list',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'Products',
      icon: 'mdi-cube',
      route: '/products',
      group: 'sales'
    },
    {
      name: 'Tallies',
      icon: 'mdi-dolly',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'Companies',
      icon: 'mdi-office-building',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'People',
      icon: 'mdi-account-group',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'Payments',
      icon: 'mdi-tag-check',
      route: '/request+for+quotes',
      group: 'sales'
    },
    {
      name: 'Open Orders',
      icon: 'mdi-package-variant',
      route: '/request+for+quotes',
      group: 'sales'
    },
    // freights
    {
      name: 'Freights',
      icon: 'mdi-truck-cargo-container',
      route: '/request+for+quotes',
      group: 'freights'
    },
    {
      name: 'Freight Purchase Orders',
      icon: 'mdi-truck-delivery mdi-flip',
      route: '/request+for+quotes',
      group: 'freights'
    },
    {
      name: 'Bill of Lading',
      icon: 'mdi-clipboard-file',
      route: '/request+for+quotes',
      group: 'freights'
    },
    {
      name: 'Freights Admin',
      icon: 'mdi-bus-wrench',
      route: '/request+for+quotes',
      group: 'freights'
    },
    // Admin
    {
      name: 'Users',
      icon: 'mdi-badge-account',
      route: '/request+for+quotes',
      group: 'admin'
    },
    {
      name: 'Site Settings',
      icon: 'mdi-application-cog',
      route: '/request+for+quotes',
      group: 'admin'
    },
  ],

  products: await getTestData('products.json', Product),
  people: await getTestData('people.json', Person),
  contacts: await getTestData('contacts.json', Contact),
  // companies: await getTestData('companies.json', Company)

})


async function getTestData(collectionName, Instance) {
  try {
    const res = await fetch('/datasets/' + collectionName)
    const data = await res.json()
    return data.map(d => new Instance(d))
  }
  catch (error) {
    Pop.error(error, `parsing ${collectionName}`, '')
    logger.error(error)
  }
}

