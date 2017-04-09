// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

const initialState = {
  data: [
    {code: 'REGISTERED'},
    {code: 'APPROVED'},
    {code: 'SENT_TO_ROUTING'},
    {code: 'ROUTED'},
    {code: 'PACKED'},
    {code: 'CONFIRMED'},
    {code: 'RECONCILED'},
    {code: 'CANCELLED'}
  ]
}
export default function typeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
