import 'whatwg-fetch'
import {removeTime} from 'modules/date'
import {camelCaseToDashes} from 'modules/strings'

export const createBackendModule = (entityName) => {
  const SUCCESS_FETCH = '@@' + entityName + '/SUCCESS_FETCH'
  const START_FETCH = '@@' + entityName + '/START_FETCH'
  const ERROR_FETCH = '@@' + entityName + '/ERROR_FETCH'
  const SUCCESS_CREATE = '@@' + entityName + '/SUCCESS_CREATE'
  const START_CREATE = '@@' + entityName + '/START_CREATE'
  const ERROR_CREATE = '@@' + entityName + '/ERROR_CREATE'

  const path = camelCaseToDashes(entityName)

  const fetchActionCreator = () => {
    return (dispatch) => {
      return dispatch({
        types: [START_FETCH, SUCCESS_FETCH, ERROR_FETCH],
        callAPI: (headers) => fetch('http://localhost:8080/' + path, {headers})
      })
    }
  }

  const createActionCreator = ({values, successMessage}) => {
    return (dispatch) => {
      let promise = dispatch({
        types: [START_CREATE, SUCCESS_CREATE, ERROR_CREATE],
        callAPI: (headers) => {
          headers.append('content-type', 'application/json')
          const convertedValues = convert(values)
          const body = JSON.stringify(convertedValues)
          return fetch('http://localhost:8080/' + path, {
            headers,
            method: 'POST',
            body: body
          })
        },
        successMessage: successMessage || 'Successfully created'
      })
      return promise
    }
  }

  const convert = (values) => {
    const newValues = {}
    for (const key in values) {
      if (key.toLowerCase().endsWith('date')) {
        newValues[key] = removeTime(values[key])
      } else {
        newValues[key] = values[key]
      }
    }
    return newValues
  }


  const ACTION_HANDLERS = {
    [SUCCESS_FETCH]: (state, action) => {
      return {
        json: action.json,
        data: getDataFromHalResponse(action.json, entityName),
        initialized: true
      }
    }
  }

  const reducer = (state = {
    initialized: false,
    data: []
  }, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
  }

  return {
    ACTION_HANDLERS,
    SUCCESS_FETCH,
    START_FETCH,
    ERROR_FETCH,
    SUCCESS_CREATE,
    START_CREATE,
    ERROR_CREATE,
    reducer,
    fetchActionCreator,
    createActionCreator
  }
}

export const getEntities = (state, entityName) => {
  return state.entities[entityName].data
}

export const getEntity = (state, entityName, id) => {
  return getEntities(state, entityName).find((entity) => entity.id === id)
}

export const getDataFromHalResponse = (json, entityName) => {
  return json._embedded ? json._embedded[entityName] || json._embedded[camelCaseToDashes(entityName)] : []
}
