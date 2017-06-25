import { createBackendModule } from './backendModule'

const module = createBackendModule('ledgers')

export const fetchLedgers = module.fetchActionCreator
export const { SUCCESS_FETCH } = module

export default module.reducer
