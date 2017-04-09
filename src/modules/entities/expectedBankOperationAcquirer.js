const SUCCESS_FETCH = '@@ExpectedBankOperationAcquirer/SUCCESS_FETCH'
const START_FETCH = '@@ExpectedBankOperationAcquirer/START_FETCH'
const ERROR_FETCH = '@@ExpectedBankOperationAcquirer/ERROR_FETCH'

export const fetchExpectedBankOperationAcquirers = () => {
  return (dispatch) => dispatch({
    types: [START_FETCH, SUCCESS_FETCH, ERROR_FETCH],
    callAPI: (headers) => fetch('/api/expectedbankoperations/acquirers', {headers})
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
