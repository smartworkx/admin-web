import 'whatwg-fetch'
import {removeTime} from 'modules/date'

export const createBackendModule = (path) => {
  const SUCCESS_FETCH = '@@' + path + '/SUCCESS_FETCH'
  const START_FETCH = '@@' + path + '/START_FETCH'
  const ERROR_FETCH = '@@' + path + '/ERROR_FETCH'
  const SUCCESS_CREATE = '@@' + path + '/SUCCESS_CREATE'
  const START_CREATE = '@@' + path + '/START_CREATE'
  const ERROR_CREATE = '@@' + path + '/ERROR_CREATE'

  const fetchActionCreator = () => {
    return {
      types: [START_FETCH, SUCCESS_FETCH, ERROR_FETCH],
      callAPI: (headers) => fetch('http://localhost:8080/' + path, {headers})
    }
  }

  const createActionCreator = ({values, successMessage}) => {
    return {
      types: [START_CREATE, SUCCESS_CREATE, ERROR_CREATE],
      callAPI: (headers) => {
        headers.append('content-type','application/json')
        const convertedValues = convert(values)
        const body = JSON.stringify(convertedValues)
        return fetch('http://localhost:8080/' + path, {
          headers,
          method: 'POST',
          body: body
        })
      },
      successMessage: successMessage || 'Successfully created'
    }
  }

  const convert = (values) => {
    const newValues = {}
    for (const key in values) {
      if (key.toLowerCase().endsWith('date')) {
        newValues[key] = removeTime(values[key])
      }else{
        newValues[key] = values[key]
      }
    }
    return newValues
  }

  const ACTION_HANDLERS = {
    [SUCCESS_FETCH]: (state, action) => {
      return {
        data: action.json,
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
  let data = state.entities[entityName].data
  return data._embedded ? data._embedded[entityName] || data._embedded[camelCaseToDashes(entityName)] : []
}
