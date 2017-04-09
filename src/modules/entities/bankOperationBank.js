const SUCCESS_FETCH = '@@BankOperationBank/SUCCESS_FETCH'
const START_FETCH = '@@BankOperationBank/START_FETCH'
const ERROR_FETCH = '@@BankOperationBank/ERROR_FETCH'

export const fetchBankOperationBanks = () => {
  return (dispatch, getState) => {
    return dispatch({
      types: [START_FETCH,
        SUCCESS_FETCH,
        ERROR_FETCH],
      callAPI: (headers) => fetch('/api/bankoperations/banks', {headers})
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
