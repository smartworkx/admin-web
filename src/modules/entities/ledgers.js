import {createBackendModule} from './backendModule'

const module = createBackendModule('ledgers')

export const fetch = module.fetchActionCreator

export default module.reducer
