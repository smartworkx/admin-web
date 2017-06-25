import { SUCCESS_FETCH as SUCCESS_FETCH_LEDGERS } from 'modules/entities/ledgers'

export const getAutocomplete = (state, name) => {
  return state.autocomplete[name]
}

const ACTION_HANDLERS = {
  [SUCCESS_FETCH_LEDGERS]: (state, action) => {
    return {
      ...state,
      ledgers: action.json._embedded.ledgers.map(ledger => ledger.code)
    }
  }
}

const reducer = (state = {
  ledgers: {}
}, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
