import { createBackendModule } from './backendModule'

const module = createBackendModule('journalEntries', { defaultFetchParams: { sort: ['valueDate', 'desc'], size:200 } })

export const fetch = module.fetchActionCreator

export default module.reducer
