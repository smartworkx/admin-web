import _ from 'lodash'
import {getEntities} from 'modules/entities'


export const actions = {
}

// ------------------------------------
// Selectors
// ------------------------------------
export const data = (state) => {
  const journalLines = _.flatMap(getEntities(state,'journalEntries'), (entry) => {
    return entry.records.sort((a, b) => a.debitCredit < b.debitCredit).map((record, i) => {
      return {
        valueDate: i === 0 ? entry.valueDate : null,
        ledger: getEntities(state,'ledgers').find((ledger) => ledger.id === record.ledgerId).name,
        debitAmount: record.debitCredit === 'DEBIT' ? record.amount.value : null,
        creditAmount: record.debitCredit === 'CREDIT' ? record.amount.value : null
      }
    })
  })
  return journalLines
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

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
