import {SUCCESS_CREATE} from 'modules/entities/balanceCreationRequestedEvents'

export const actions = {}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SUCCESS_CREATE]: (state, action) => {
    return {
      ...state,
      details: action.json
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  details: {}
}
export default function balanceDetailsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
