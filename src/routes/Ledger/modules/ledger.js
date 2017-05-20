import _ from 'lodash'
import {fetchLedgers} from 'modules/entities/ledgers'
import {getDataFromHalResponse} from 'modules/entities'


export const CREATE_LEDGER = '@@Ledger/CREATE_LEDGER'

const createLedger = () => {
  return (dispatch) => {
    return dispatch(fetchLedgers()).then((ledgerAction) => {
      dispatch(fetch()).then((ledgerEntryAction) => {
        dispatch({
          type: CREATE_LEDGER,
          ledgers: getDataFromHalResponse(ledgerAction.json, 'ledgers'),
          ledgerEntries: getDataFromHalResponse(ledgerEntryAction.json, 'ledgerEntries')
        })
      })
    })
  }
}

export const actions = {
  createLedger
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_LEDGER]: (state, action) => {
    const ledgerLines = _.flatMap(action.ledgerEntries, (entry) => {
      return entry.records.sort((a,b) => a.debitCredit < b.debitCredit).map((record, i) => {
        return {
          valueDate: i === 0 ? entry.valueDate : null,
          ledger: action.ledgers.find((ledger) => ledger.id === record.ledgerId).name,
          debitAmount: record.debitCredit === 'DEBIT' ? record.amount.value : null,
          creditAmount: record.debitCredit === 'CREDIT' ? record.amount.value : null
        }
      })
    })
    return {
      ...state,
      ledgerLines
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  ledgerLines: []
}

export default function ledgerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
