import 'whatwg-fetch'
import {removeTime} from 'modules/date'
import {camelCaseToDashes} from 'modules/strings'
import {addOrReplace} from 'modules/arrays'
import {BASE_PATH, objectToQueryParams} from 'modules/http'

export const createBackendModule = (entityName, props) => {
  const SUCCESS_FETCH = '@@' + entityName + '/SUCCESS_FETCH'
  const START_FETCH = '@@' + entityName + '/START_FETCH'
  const ERROR_FETCH = '@@' + entityName + '/ERROR_FETCH'
  const SUCCESS_FETCH_ONE = '@@' + entityName + '/SUCCESS_FETCH_ONE'
  const START_FETCH_ONE = '@@' + entityName + '/START_FETCH_ONE'
  const ERROR_FETCH_ONE = '@@' + entityName + '/ERROR_FETCH_ONE'
  const SUCCESS_CREATE = '@@' + entityName + '/SUCCESS_CREATE'
  const START_CREATE = '@@' + entityName + '/START_CREATE'
  const ERROR_CREATE = '@@' + entityName + '/ERROR_CREATE'

  const extraPath = props && props.extraPath ? props.extraPath : ''
  const path = camelCaseToDashes(entityName) + extraPath

  const fetchActionCreator = () => {
    return (dispatch) => {
      const query = props ? objectToQueryParams(props.defaultFetchParams) : ''
      return dispatch({
        types: [START_FETCH, SUCCESS_FETCH, ERROR_FETCH],
        callAPI: (headers) => fetch(BASE_PATH + path + query, {headers})
      })
    }
  }

  const fetchOneActionCreator = (id) => {
    return (dispatch) => {
      return dispatch({
        types: [START_FETCH_ONE, SUCCESS_FETCH_ONE, ERROR_FETCH_ONE],
        callAPI: (headers) => fetch(BASE_PATH + path + '/' + id, {headers})
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
          return fetch(BASE_PATH + path, {
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
      }
    },
    [SUCCESS_FETCH_ONE]: (state, action) => {
      return {
        ...state,
        current: action.json,
        data: addOrReplace(state.data, action.json),
      }
    }
  }

  const reducer = (state = {
    current: null,
    data: []
  }, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
  }

  const getEntityState = (state) => {
    return state.entities[entityName]
  }

  const getCurrent = (state) => {
    return getEntityState(state).current
  }

  const getEntities = (state) => {
    return getEntityState(state).data
  }

  return {
    ACTION_HANDLERS,
    SUCCESS_FETCH,
    START_FETCH,
    ERROR_FETCH,
    SUCCESS_FETCH_ONE,
    START_FETCH_ONE,
    ERROR_FETCH_ONE,
    SUCCESS_CREATE,
    START_CREATE,
    ERROR_CREATE,
    reducer,
    fetchActionCreator,
    fetchOneActionCreator,
    createActionCreator,
    getEntityState,
    getCurrentEntity: getCurrent,
    getEntities
  }
}

export const getEntities = (state, entityName) => {
  return state.entities[entityName].data
}

export const getEntity = (state, entityName, id) => {
  return getEntities(state, entityName).find(entity => entity.id === Number.parseInt(id))
}

export const getDataFromHalResponse = (json, entityName) => {
  return json._embedded ? json._embedded[entityName] || json._embedded[camelCaseToDashes(entityName)] : []
}
