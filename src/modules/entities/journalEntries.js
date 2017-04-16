import {createBackendModule} from './backendModule'

const module = createBackendModule('journal-entries')

export const fetch = module.fetchActionCreator

export const create = module.createActionCreator

export const SUCCESS_CREATE = module.SUCCESS_CREATE

export default module.reducer
