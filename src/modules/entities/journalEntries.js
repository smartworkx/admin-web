import {createBackendModule} from './backendModule'

const module = createBackendModule('journal-entries')

export const fetch = module.fetchActionCreator

export const create = module.createActionCreator

export default module.reducer
