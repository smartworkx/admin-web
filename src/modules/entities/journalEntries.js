import {createBackendModule} from './backendModule'

const module = createBackendModule('journalEntries', { sorting: ['valueDate', 'asc'], size:200 })

export const search = module.fetchActionCreator

export default module.reducer
