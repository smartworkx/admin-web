import {fetchInboxFinancialFacts} from 'modules/entities/inboxFinancialFacts'

const FINANCIAL_FACT_PROPOSAL = "FINANCIAL_FACT_PROPOSAL"

const CANCEL_FINANCIAL_FACT_CREATION = "CANCEL_FINANCIAL_FACT_CREATION"

const openFinancialFactDialog = ({financialFact, origin}) => {
  return {
    type: FINANCIAL_FACT_PROPOSAL,
    financialFact,
    origin
  }
}

const cancelFinancialFactCreation = () => {
  return (dispatch) => {
    dispatch(fetchInboxFinancialFacts())
    dispatch({
      type: CANCEL_FINANCIAL_FACT_CREATION
    })
  }
}


export const actions = {
  openFinancialFactDialog,
  cancelFinancialFactCreation
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FINANCIAL_FACT_PROPOSAL]: (state, action) => {
    const financialFact = action.financialFact
    const financialFactProposal = financialFact ? {
      valueDate: new Date(financialFact.valueDate),
      amount: financialFact.amount.value.toString(),
      description: 'Factuur voor bank transactie: ' + financialFact.description,
      origin: action.origin
    } : null
    return {
      ...state,
      active: true,
      financialFactProposal
    }
  },

  [CANCEL_FINANCIAL_FACT_CREATION]: (state, action) => {
    return {
      ...state,
      active: false
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  active: false
}
export default function inboxFinancialFactsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
