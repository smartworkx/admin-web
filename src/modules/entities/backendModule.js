export const createBackendModule = (path) => {
  const SUCCESS_FETCH = '@@' + path + '/SUCCESS_FETCH'
  const START_FETCH = '@@' + path + '/START_FETCH'
  const ERROR_FETCH = '@@' + path + '/ERROR_FETCH'

  const fetchActionCreator = () => {
    return (dispatch) => dispatch({
      types: [START_FETCH, SUCCESS_FETCH, ERROR_FETCH],
      callAPI: (headers) => fetch('/api/' + path, {headers})
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

  const reducer = (state = {
    initialized: false,
    data: []
  }, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
  }

  return {
    reducer,
    fetchActionCreator
  }
}
