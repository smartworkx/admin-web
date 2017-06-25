import { createBackendModule } from './backendModule'
import { SUCCESS_CREATE as JOURNAL_ENTRY_SUCCESS_CREATE } from './journalEntryCreatedEvents'
import { BASE_PATH, objectToQueryParams } from 'modules/http'

const path = 'journal-entry-proposals'
const SUCCESS_FETCH_JEP = '@@' + path + '/SUCCESS_FETCH'
const START_FETCH_JEP = '@@' + path + '/START_FETCH'
const ERROR_FETCH_JEP = '@@' + path + '/ERROR_FETCH'

export const fetchJournalEntryProposals = (params) => {
  return {
    types: [START_FETCH_JEP, SUCCESS_FETCH_JEP, ERROR_FETCH_JEP],
    callAPI: (headers) => fetch(BASE_PATH + path + objectToQueryParams(params), { headers }),
    payload: {
      financialFactId: params.financialFactId
    }
  }
}

const module = createBackendModule('inboxFinancialFacts')

export const fetchInboxFinancialFacts = module.fetchActionCreator

module.ACTION_HANDLERS[JOURNAL_ENTRY_SUCCESS_CREATE] = (state, action) => {
  const financialFactId = action.json.financialFactId

  return {
    ...state,
    data: state.data.filter(iff => iff.financialFact.id !== financialFactId)
  }
}

module.ACTION_HANDLERS[SUCCESS_FETCH_JEP] = (state, action) => {
  const inboxFinancialFacts = state.data
  const index = inboxFinancialFacts.findIndex(iff => iff.financialFact.id === action.financialFactId)
  let inboxFinancialFactToReplace = inboxFinancialFacts[index]
  const newIffs = [...inboxFinancialFacts.slice(0, index),
    { ...inboxFinancialFactToReplace, records: action.json._embedded.records },
    ...inboxFinancialFacts.slice(index + 1)]
  return {
    ...state,
    data: newIffs
  }
}

export default module.reducer
