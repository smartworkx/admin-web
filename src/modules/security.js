import Keycloak from 'keycloak-js'
import {showErrorMessage} from '../components/GlobalMessage'

let keycloak

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_SECURITY_SUCCESS = 'INIT_SECURITY_SUCCESS'
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

const initSecuritySuccess = (authenticated, token) => {
  return {
    type: INIT_SECURITY_SUCCESS,
    authenticated,
    token
  }
}

export const initSecurity = () => {
  return function (dispatch) {
    if (!keycloak) {
      keycloak = Keycloak({
        realm: 'admin',
        url: location.protocol + '//' + location.host + '/auth',
        clientId: 'admin-web'
      })
      keycloak.init({
        onLoad: 'login-required'
      }).success(function (authenticated) {
        console.log(`Authenticated = ${authenticated}`)
        dispatch(initSecuritySuccess(authenticated, keycloak.token))
      }).error(function () {
        dispatch(showErrorMessage('Error logging in'))
      })
    }
  }
}

const updateTokenSuccess = (token) => {
  return {
    type: UPDATE_TOKEN_SUCCESS,
    token: token || keycloak.token
  }
}

export const login = () => {
  keycloak.login()
}

window.fetchBearerToken = () => {
  return new Promise((resolve, reject) => {
    keycloak.updateToken().success(() => resolve(keycloak.token)).error(() => reject())
  })
}

export const updateToken = () => {
  return function (dispatch) {
    const promise = new Promise((resolve, reject) => {
      keycloak.updateToken().success(() => resolve()).error(() => reject())
    }).then(
      () => {
        dispatch(updateTokenSuccess())
      },
      () => {
        login()
      }
    )
    return promise
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INIT_SECURITY_SUCCESS]: (state, action) => {
    return {
      ...state,
      authenticated: action.authenticated,
      token: action.token
    }
  },
  [UPDATE_TOKEN_SUCCESS]: (state, action) => {
    return {
      ...state,
      token: action.token
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  authenticated: false
}

export default function securityReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

