import {createBackendModule} from './backendModule'

const module = createBackendModule('unrecognizedbankoperations/banks')

export const fetchUnrecognizedBankOperationBanks = module.fetchActionCreator

export default module.reducer
