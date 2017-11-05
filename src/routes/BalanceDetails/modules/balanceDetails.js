import {create, SUCCESS_CREATE as SUCCESS_CREATE_SAVE} from 'modules/entities/balanceCreationConfirmations'
import browserHistory from 'react-router/lib/browserHistory'

const save = (command) => {
  return (dispatch) => {
    return dispatch(create({
      values: command
    })).then(action => {
      if (action.type === SUCCESS_CREATE_SAVE) {
        browserHistory.push('/balances')
      }
    })
  }
}
export const actions = {
  save
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
}



// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function balanceDetailsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
