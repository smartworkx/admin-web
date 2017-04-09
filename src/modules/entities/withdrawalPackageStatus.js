// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

const initialState = {
  data: [
    {code: 'NEW'},
    {code: 'DOWNLOADED'},
    {code: 'CONFIRMED'}
  ]
}

export default function typeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
