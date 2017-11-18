import { groupBy } from 'modules/arrays'
import { SUCCESS_CREATE } from 'modules/entities/palStatementCreationRequestedEvents'

export const actions = {}

const sortByDebitCredit = (headings) => {
  return headings.sort((a, b) => {
    if (a.debitCredit === 'DEBIT' && b.debitCredit === 'CREDiT') {
      return -1
    } else if (a.debitCredit === 'CREDIT' && a.debitCredit === 'DEBIT') {
      return 1
    }
    return 0
  })
}

const createLine = (nameAmountObject, debitCredit, type) => {
  return {
    name: nameAmountObject.name,
    debitAmount: debitCredit === 'DEBIT' ? nameAmountObject.amount.value : null,
    creditAmount: debitCredit === 'CREDIT' ? nameAmountObject.amount.value : null,
    type
  }
}

export const getLines = (routeState, ledgers) => {
  const lines = []
  const details = routeState.details
  if (details && details.headings.length > 0 && ledgers && ledgers.length > 0) {
    sortByDebitCredit(details.headings).forEach((heading) => {
      lines.push(createLine(heading, heading.debitCredit, 'HEADING'))
      heading.accounts.forEach((account) => {
        lines.push(createLine({
          name: ledgers.find((ledger) => ledger.id === account.ledgerId).name,
          amount: account.amount
        }, heading.debitCredit, 'LEDGER'))
      })
    })
    lines.push({ name: 'Profit', debitAmount: 0, creditAmount: details.profit.value, type: 'HEADING' })
  }
  return lines
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SUCCESS_CREATE]: (state, action) => {
    return {
      ...state,
      details: action.json
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  details: {},
  balanceLines: []
}
export default function palStatementDetailsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
