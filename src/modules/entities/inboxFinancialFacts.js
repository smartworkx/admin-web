import {createBackendModule} from './backendModule'

const module = createBackendModule('inbox-financial-facts')

export const fetch = module.fetchActionCreator

export default module.reducer
