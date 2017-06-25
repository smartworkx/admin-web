import { createBackendModule } from './backendModule'

const module = createBackendModule('financialFacts')

export const fetch = module.fetchActionCreator

export const create = module.createActionCreator

export default module.reducer
