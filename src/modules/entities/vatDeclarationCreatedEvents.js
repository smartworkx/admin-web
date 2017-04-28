import {createBackendModule} from './backendModule'

const module = createBackendModule('vatDeclarationCreatedEvents')

export const create = module.createActionCreator

export const SUCCESS_CREATE = module.SUCCESS_CREATE

export default module.reducer
