import {showErrorMessage, showMessage} from 'components/GlobalMessage'

// ------------------------------------
// Middleware for handling all the api calls to the server. It reduces boilerplate and acts as an central place to
// handle security and server side error messages.
// ------------------------------------
export default function callAPIMiddlewareFactory() {
  return ({dispatch, getState}) => {
    return next => action => {
      const {
        types,
        callAPI,
        shouldCallAPI = () => true,
        payload = {},
        successMessage = null
      } = action

      if (!types) {
        return next(action)
      }

      if (
        !Array.isArray(types) ||
        types.length !== 3 || !types.every(type => typeof type === 'string')
      ) {
        throw new Error('Expected an array of three string types.')
      }

      if (typeof callAPI !== 'function') {
        throw new Error('Expected callAPI to be a function.')
      }

      if (!shouldCallAPI(getState())) {
        return
      }

      const [requestType, successType, failureType] = types

      function handleResponse({response, json, text}) {
        if (response.ok) {
          if (successMessage) {
            dispatch(showMessage(successMessage, 'success'))
          }
          return dispatch({
            ...payload,
            response,
            json,
            text,
            type: successType
          })
        } else {
          let errorMessage
          if (json && json.message) {
            errorMessage = json.message
          } else {
            errorMessage = 'An error occurred.'
          }
          dispatch(showErrorMessage(errorMessage))
          return dispatch({
            ...payload,
            response,
            json,
            type: failureType
          })
        }
      }

      dispatch({
        ...payload,
        type: requestType
      })

      const headers = new Headers()
      headers.append("Accept", "application/hal+json")
      return callAPI(headers).then(
        response => {
          const contentType = response.headers.get('content-type')
          if (contentType &&
            (contentType.indexOf('application/json') !== -1 ||
            contentType.indexOf('application/hal+json') !== -1)) {
            return response.json().then((json) => {
              return handleResponse({response, json})
            })
          } else if (contentType && contentType.indexOf('text') !== -1) {
            return response.text().then((text) => {
              return handleResponse({response, text})
            })
          } else {
            return handleResponse({response})
          }
        },
        error => {
          dispatch(showErrorMessage('An error occurred.'))
          dispatch({
            ...payload,
            error,
            type: failureType
          })
        }
      )
    }
  }
}
