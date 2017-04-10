import {createBackendModule} from './backendModule'

const module = createBackendModule('financial-facts')

export const fetchFinancialFacts = module.fetchActionCreator

export default module.reducer
