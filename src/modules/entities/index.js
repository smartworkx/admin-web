import {combineReducers} from 'redux'
import {getEntities, getDataFromHalResponse} from './backendModule'
import {camelCaseToDashes} from 'modules/strings'
import financialFacts from './financialFacts'
import journalEntries from './journalEntries'
import journalEntryCreatedEvents from './journalEntryCreatedEvents'
import vatDeclarationCreatedEvents from './vatDeclarationCreatedEvents'
import vatDeclarations from './vatDeclarations'
import inboxFinancialFacts from './inboxFinancialFacts'
import ledgers from './ledgers'
import origins from './origins'
import balances from './balances'
import balanceDetails from './balanceDetails'
import palStatements from './palStatements'
import palStatementCreationRequestedEvents from './palStatementCreationRequestedEvents'

export {getEntities, getDataFromHalResponse}

export default combineReducers({
  inboxFinancialFacts,
  financialFacts,
  journalEntries,
  vatDeclarations,
  ledgers,
  origins,
  journalEntryCreatedEvents,
  vatDeclarationCreatedEvents,
  balances,
  balanceDetails,
  palStatements,
  palStatementCreationRequestedEvents
})


