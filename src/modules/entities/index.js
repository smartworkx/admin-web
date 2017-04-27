import {combineReducers} from 'redux'
import {getEntities} from './backendModule'
import {camelCaseToDashes} from 'modules/strings'
import financialFacts from './financialFacts'
import journalEntries from './journalEntries'
import vatDeclarations from './vatDeclarations'
import inboxFinancialFacts from './inboxFinancialFacts'
import ledgers from './ledgers'
import origins from './origins'

export {getEntities}

export default combineReducers({
  inboxFinancialFacts,
  financialFacts,
  journalEntries,
  vatDeclarations,
  ledgers,
  origins
})


