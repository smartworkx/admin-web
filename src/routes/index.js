import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import BankFileUploadsRoute from './BankFileUploads'
import FinancialFactsRoute from './FinancialFacts'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    BankFileUploadsRoute(store),
    FinancialFactsRoute(store)
  ]
})

export default createRoutes
