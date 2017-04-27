import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import BankFileUploadsRoute from './BankFileUploads'
import FinancialFactsRoute from './FinancialFacts'
import ValueAddedTax from './VatDeclarations'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    BankFileUploadsRoute(store),
    FinancialFactsRoute(store),
    ValueAddedTax(store)
  ]
})

export default createRoutes
