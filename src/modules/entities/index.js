import {combineReducers} from 'redux'
import {camelCaseToDashes} from 'modules/strings'
import financialFacts from './financialFacts'
import ledgers from './ledgers'

export default combineReducers({
  financialFacts,
  ledgers
})

export const getEntities = (state, entityName) => {

  let data = state.entities[entityName].data
  return data._embedded ? data._embedded[camelCaseToDashes(entityName)] : []
}
