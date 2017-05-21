import CoreLayout from '../layouts/CoreLayout'
import BankFileUploadsRoute from './BankFileUploads'
import InboxFinancialFactsRoute from './InboxFinancialFacts'
import ValueAddedTax from './VatDeclarations'
import Journal from './Journal'
import Ledger from './Ledger'
import Balances from './Balances'
import BalanceDetails from './Balances/routes/Details'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: InboxFinancialFactsRoute(store),
  childRoutes: [
    BankFileUploadsRoute(store),
    ValueAddedTax(store),
    Journal(store),
    Ledger(store),
    Balances(store),
    BalanceDetails(store)
  ]
})

export default createRoutes
