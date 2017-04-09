import {createBackendModule} from './backendModule'

const module = createBackendModule('unrecognizedbankoperations/currencies')

export const fetchUnrecognizedBankOperationCurrencies = module.fetchActionCreator

export default module.reducer
