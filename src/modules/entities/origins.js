import {createBackendModule} from './backendModule'

const module = createBackendModule('origins')

export const fetch = module.fetchActionCreator

export default module.reducer
