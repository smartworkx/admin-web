import {createBackendModule} from './backendModule'
import {SUCCESS_CREATE} from './journalEntries'

const module = createBackendModule('inbox-financial-facts')

export const fetch = module.fetchActionCreator

module.ACTION_HANDLERS[SUCCESS_CREATE] = (state, action) => {
  const financialFactId = action.json.financialFactId

  return {
    ...state,
    data: {
      ...state.data,
      _embedded: {
        inboxFinancialFacts: state.data._embedded.inboxFinancialFacts.filter(iff => iff.financialFact.id !== financialFactId)
      }
    }
  }
}

export default module.reducer
