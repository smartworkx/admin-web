import {createBackendModule} from './backendModule'

const module = createBackendModule('ledgers')

export const fetchLedgers = module.fetchActionCreator
export const {SUCCESS_FETCH} = module
export const getEntities = module.getEntities
export const getIdNameAutocomplete = (state) => getEntities(state).map(ledger => {
  const entry = {}
  entry[ledger.id] = ledger.name
  return entry
})

export default module.reducer
