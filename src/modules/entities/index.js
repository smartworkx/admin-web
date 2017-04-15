import {combineReducers} from 'redux'
import {camelCaseToDashes} from 'modules/strings'
import financialFacts from './financialFacts'
import inboxFinancialFacts from './inboxFinancialFacts'
import ledgers from './ledgers'
import origins from './origins'

export default combineReducers({
  inboxFinancialFacts,
  financialFacts,
  ledgers,
  origins
})

export const getEntities = (state, entityName) => {
  let data = state.entities[entityName].data
  return data._embedded ? data._embedded[camelCaseToDashes(entityName)] : []
}
