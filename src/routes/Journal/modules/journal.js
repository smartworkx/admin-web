const CREATE_JOURNAL = 'CREATE_JOURNAL'

const createJournal = () => {
  return {
    type: CREATE_JOURNAL
  }
}

export const actions = {
  createJournal
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  entries: []
}

export default function journalReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
