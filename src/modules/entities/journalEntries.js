import { createBackendModule } from './backendModule'

const module = createBackendModule('journalEntries')

export const fetch = module.fetchActionCreator

export default module.reducer
