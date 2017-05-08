import _ from 'lodash/'
import {fetch} from 'modules/entities/journalEntries'
import {fetchLedgers} from 'modules/entities/ledgers'
import {getDataFromHalResponse} from 'modules/entities'


export const CREATE_JOURNAL = '@@Journal/CREATE_JOURNAL'

const createJournal = () => {
  return (dispatch) => {
    return dispatch(fetchLedgers()).then((ledgerAction) => {
      dispatch(fetch()).then((journalEntryAction) => {
        dispatch({
          type: CREATE_JOURNAL,
          ledgers: getDataFromHalResponse(ledgerAction.json, 'ledgers'),
          journalEntries: getDataFromHalResponse(journalEntryAction.json, 'journalEntries')
        })
      })
    })
  }
}

export const actions = {
  createJournal
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_JOURNAL]: (state, action) => {
    const journalLines = _.flatMap(action.journalEntries, (entry) => {
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
      journalLines
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  journalLines: []
}

export default function journalReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
