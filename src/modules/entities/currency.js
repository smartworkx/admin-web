// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

const initialState = {
  data: [
    {code: 'EUR'},
    {code: 'PLN'},
    {code: 'RON'},
    {code: 'USD'}
  ]
}

export default function currencyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
