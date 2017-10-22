import _ from 'lodash'
import {fetchLedgers} from 'modules/entities/ledgers'
import {getEntities} from 'modules/entities'

const createLedger = () => {
  return fetchLedgers()
}

export const actions = {
  createLedger
}

export const ledgerLinesSelector = (state) => {
  return _.sortBy(getEntities(state, 'ledgers'),['code'])
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  ledgerLines: []
}

export default function ledgerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
