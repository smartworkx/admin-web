import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import BankFileUploadsRoute from './BankFileUploads'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    BankFileUploadsRoute(store)
  ]
})

export default createRoutes
