import {create} from 'modules/entities/vatDeclarationCreatedEvents'

const onSubmit = (values) => {
  return create({
    values
  })
}

export const actions = {
}

export const formActions = {
  onSubmit
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
}
export default function vatDeclarationsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
