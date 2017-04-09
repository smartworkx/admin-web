const SUCCESS_FETCH = '@@ExpectedBankOperationCurrency/SUCCESS_FETCH'
const START_FETCH = '@@ExpectedBankOperationCurrency/START_FETCH'
const ERROR_FETCH = '@@ExpectedBankOperationCurrency/ERROR_FETCH'

export const fetchExpectedBankOperationCurrencies = () => {
  return (dispatch) => dispatch({
    types: [START_FETCH, SUCCESS_FETCH, ERROR_FETCH],
    callAPI: (headers) => fetch('/api/expectedbankoperations/currencies', {headers})
  })
}

const ACTION_HANDLERS = {
  [SUCCESS_FETCH]: (state, action) => {
    return {
      data: action.json,
      initialized: true
    }
  }
}

export default function reducer (state = {
  initialized: false,
  data: []
}, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
