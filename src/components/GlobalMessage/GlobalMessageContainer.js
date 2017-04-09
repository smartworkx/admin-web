import {connect} from 'react-redux'
import GlobalMessage from './GlobalMessage'

// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export const showMessage = (message, style = 'success') => {
  return {
    type: SHOW_MESSAGE,
    message,
    style
  }
}

export const showErrorMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    message,
    style: 'danger'
  }
}

export const hideMessage = () => {
  return {type: HIDE_MESSAGE}
}

export const actions = {
  showMessage,
  hideMessage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_MESSAGE]: (state, action) => {
    return {
      ...state,
      message: action.message,
      style: action.style
    }
  },
  [HIDE_MESSAGE]: (state, action) => {
    return {
      ...state,
      message: null,
      style: null
    }
  },
  '@@router/LOCATION_CHANGE': (state, action) => {
    return {
      ...state,
      message: null,
      style: null
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  style: 'info'
}

export function GlobalMessageReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Container
// ------------------------------------
const mapActionCreators = {
  hideMessage
}

const mapStateToProps = (state) => {
  return state.globalMessage
}

export default connect(mapStateToProps, mapActionCreators)(GlobalMessage)
