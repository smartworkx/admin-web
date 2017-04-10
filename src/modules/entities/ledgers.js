import {createBackendModule} from './backendModule'

const module = createBackendModule('ledgers')

export const fetchLedgers = module.fetchActionCreator

export default module.reducer
