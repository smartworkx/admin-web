import CoreLayout from '../layouts/CoreLayout'
import BankFileUploadsRoute from './BankFileUploads'
import InboxFinancialFactsRoute from './InboxFinancialFacts'
import ValueAddedTax from './VatDeclarations'
import Journal from './Journal'
import Ledger from './Ledger'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: InboxFinancialFactsRoute(store),
  childRoutes: [
    BankFileUploadsRoute(store),
    ValueAddedTax(store),
    Journal(store),
    Ledger(store)
  ]
})

export default createRoutes
