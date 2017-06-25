import { createBackendModule } from './backendModule'

const module = createBackendModule('balances')

export const fetch = module.fetchActionCreator

export const create = module.createActionCreator

export default module.reducer
