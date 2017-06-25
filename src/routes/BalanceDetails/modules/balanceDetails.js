import { SUCCESS_CREATE } from 'modules/entities/balanceCreationRequestedEvents'
import { SUCCESS_FETCH_ONE } from 'modules/entities/balanceDetails'

export const actions = {}

// ------------------------------------
// Action Handlers
// ------------------------------------
function sortByDebitCredit (balanceHeadings) {
  return balanceHeadings.sort((a, b) => {
    if (a.debitCredit === 'DEBIT' && b.debitCredit === 'CREDiT') {
      return -1
    } else if (a.debitCredit === 'CREDIT' && a.debitCredit === 'DEBIT') {
      return 1
    }
    return 0
  })
}

export const getLines = (routeState) => {
  const balanceLines = []
  const details = routeState.details
  if (details && details.balanceHeadings.length > 0) {
    const balanceHeadings = details.balanceHeadings
    sortByDebitCredit(balanceHeadings).forEach((heading) => {
      const debitCredit = heading.debitCredit
      balanceLines.push(createLine(heading, debitCredit, 'HEADING'))
      heading.accounts.forEach((account) => {
        balanceLines.push(createLine(account, debitCredit, 'ACCOUNT'))
      })
    })
    balanceLines.push({
      name: 'Total',
      debitAmount: details.debitAmount.value,
      creditAmount: details.creditAmount.value
    })
  }

  return balanceLines
}

const ACTION_HANDLERS = {
  [SUCCESS_CREATE]: (state, action) => {
    return {
      ...state,
      details: action.json
    }
  },
  [SUCCESS_FETCH_ONE]: (state, action) => {
    return {
      ...state,
      details: action.json
    }
  }
}

function createLine (nameAmountObject, debitCredit, type) {
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
const initialState = {}
export default function balanceDetailsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
