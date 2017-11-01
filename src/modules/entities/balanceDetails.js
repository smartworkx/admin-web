import {createBackendModule} from './backendModule'
import {addOrReplace} from 'modules/arrays'
import {SUCCESS_CREATE as BALANCE_SUCCESS_CREATE} from './balanceCreationRequestedEvents'

const module = createBackendModule('balanceDetails')

export const fetchOne = module.fetchOneActionCreator

export const getCurrentEntity = module.getCurrentEntity

export const SUCCESS_FETCH_ONE = module.SUCCESS_FETCH_ONE

module.ACTION_HANDLERS[BALANCE_SUCCESS_CREATE] = (state, action) => {
  return {
    ...state,
    current: action.json,
    data: addOrReplace(state.data, action.json),
  }
}

const sortByDebitCredit  = (balanceHeadings) => {
  return balanceHeadings.sort((a, b) => {
    if (a.debitCredit === 'DEBIT' && b.debitCredit === 'CREDiT') {
      return -1
    } else if (a.debitCredit === 'CREDIT' && a.debitCredit === 'DEBIT') {
      return 1
    }
    return 0
  })
}

export const getLines = (state) => {
  const balanceLines = []
  const details = getCurrentEntity(state)
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

const createLine = (nameAmountObject, debitCredit, type) => {
  return {
    name: nameAmountObject.name,
    debitAmount: debitCredit === 'DEBIT' ? nameAmountObject.amount.value : null,
    creditAmount: debitCredit === 'CREDIT' ? nameAmountObject.amount.value : null,
    type
  }
}

export default module.reducer
