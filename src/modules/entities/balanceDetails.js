import {createBackendModule} from './backendModule'

const module = createBackendModule('balance-details')

export const fetchOne = module.fetchOneActionCreator

export const SUCCESS_FETCH_ONE = module.SUCCESS_FETCH_ONE

export default module.reducer
