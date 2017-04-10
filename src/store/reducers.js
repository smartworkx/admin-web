import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import locationReducer from './location'
import entities from 'modules/entities'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    entities: entities,
    location: locationReducer,
    form,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
