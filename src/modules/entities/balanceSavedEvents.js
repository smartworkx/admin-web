import {createBackendModule} from './backendModule'

export const ENTITY_NAME = 'balanceSavedEvents'

const module = createBackendModule(ENTITY_NAME)

export const create = module.createActionCreator

export const SUCCESS_CREATE = module.SUCCESS_CREATE

export default module.reducer
