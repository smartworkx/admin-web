// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

const initialState = {
  data: [
    {code: 'ACQUIRER_FEE'},
    {code: 'BANK_COST'},
    {code: 'CAPTURE'},
    {code: 'COMPRESSED'},
    {code: 'INTEREST_PAYMENT'},
    {code: 'INTEREST_TAX'},
    {code: 'INTERNAL_TRANSFER'},
    {code: 'MAINTENANCE_FEE'},
    {code: 'REFUND'},
    {code: 'UNKNOWN'},
    {code: 'WITHDRAWAL'}
  ]
}

export default function typeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
