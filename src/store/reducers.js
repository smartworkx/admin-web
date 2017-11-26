import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import locationReducer from './location'
import entities from 'modules/entities'
import autocomplete from 'modules/autocomplete'
import { globalMessageReducer as globalMessage } from 'components/GlobalMessage'
import security from 'modules/security'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    entities: entities,
    location: locationReducer,
    form,
    globalMessage,
    autocomplete,
    security,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
