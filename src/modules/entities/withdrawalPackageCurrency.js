// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

const initialState = {
  data: [
    {code: 'EUR'},
    {code: 'RON'},
    {code: 'USD'}
  ]
}
export default function typeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
