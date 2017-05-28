import CoreLayout from '../layouts/CoreLayout'
import BankFileUploadsRoute from './BankFileUploads'
import InboxFinancialFactsRoute from './InboxFinancialFacts'
import ValueAddedTax from './VatDeclarations'
import Journal from './Journal'
import Ledger from './Ledger'
import Balances from './Balances'
import BalanceDetails from './BalanceDetails'
import PalStatements from './PalStatements'
import PalStatementDetails from './PalStatementDetails'

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
    BalanceDetails(store),
    PalStatements(store),
    PalStatementDetails(store)
  ]
})

export default createRoutes
