import {create as createVatDeclaration} from 'modules/entities/vatDeclarationCreatedEvents'
import {create as createVatDeclarationCreationRequest, SUCCESS_CREATE as VACR_SUCCESS_CREATE} from 'modules/entities/vatDeclarationCreationRequests'
import {addOrReplace} from 'modules/arrays'

const onSubmit = (values) => {
  if (values.action === 'show') {
    return createVatDeclarationCreationRequest({
      values
    })
  } else {
    return createVatDeclaration({
      values
    })
  }
}

export const actions = {}

export const formActions = {
  onSubmit
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [VACR_SUCCESS_CREATE]: (state, action) => {
    const vatDeclaration = action.json
    // Create fake id so add or replace works correctly
    vatDeclaration.id = vatDeclaration.period.year + vatDeclaration.period.quarter
    return {
      ...state,
      notPersistedData: addOrReplace(state.notPersistedData, action.json),
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  notPersistedData: []
}

export default function vatDeclarationsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
