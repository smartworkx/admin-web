import {SUCCESS_CREATE} from 'modules/entities/balanceCreationRequestedEvents'

export const actions = {}

// ------------------------------------
// Action Handlers
// ------------------------------------
function sortByDebitCredit(balanceHeadings) {
  return balanceHeadings.sort((a, b) => {
    if (a.debitCredit === 'DEBIT' && b.debitCredit === 'CREDiT') {
      return -1
    } else if (a.debitCredit === 'CREDIT' && a.debitCredit === 'DEBIT') {
      return 1
    }
    return 0
  })
}
const ACTION_HANDLERS = {
  [SUCCESS_CREATE]: (state, action) => {
    const balanceLines = []

    sortByDebitCredit(action.json.balanceHeadings).forEach((heading) => {
      const debitCredit = heading.debitCredit
      balanceLines.push(createLine(heading, debitCredit,'HEADING'))
      heading.accounts.forEach((account) => {
        balanceLines.push(createLine(account, debitCredit,'ACCOUNT'))
      })
    })

    return {
      ...state,
      details: action.json,
      balanceLines
    }
  }
}

function createLine(nameAmountObject, debitCredit, type) {
  return {
    name: nameAmountObject.name,
    debitAmount: debitCredit === 'DEBIT' ? nameAmountObject.amount.value : null,
    creditAmount: debitCredit === 'CREDIT' ? nameAmountObject.amount.value : null,
    type
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  details: {},
  balanceLines: []
}
export default function balanceDetailsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
