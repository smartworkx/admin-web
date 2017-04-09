// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

const initialState = {
  data: [
    {code: 'CAPTURE'},
    {code: 'COMPRESSED'},
    {code: 'REFUND'},
    {code: 'WITHDRAWAL'}
  ]
}

export default function typeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
