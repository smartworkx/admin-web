const SUCCESS_FETCH = '@@BankOperationCurrency/SUCCESS_FETCH'
const START_FETCH = '@@BankOperationCurrency/START_FETCH'
const ERROR_FETCH = '@@BankOperationCurrency/ERROR_FETCH'

export const fetchBankOperationCurrencies = () => {
  return (dispatch, getState) => {
    return dispatch({
      types: [START_FETCH,
        SUCCESS_FETCH,
        ERROR_FETCH],
      callAPI: (headers) => fetch('/api/bankoperations/currencies', {headers})
    })
  }
}
const ACTION_HANDLERS = {
  [SUCCESS_FETCH]: (state, action) => {
    return {
      data: action.json
    }
  }
}

export default function reducer (state = {
  data: []
}, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
