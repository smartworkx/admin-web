import {createBackendModule} from './backendModule'
import {SUCCESS_CREATE as VAT_DECLARATION_SUCCESS_CREATE} from './vatDeclarationCreatedEvents'

const module = createBackendModule('vatDeclarations')

export const fetch = module.fetchActionCreator

module.ACTION_HANDLERS[VAT_DECLARATION_SUCCESS_CREATE] = (state, action) => {
  const vatDeclaration = action.json

  return {
    ...state,
    data: [vatDeclaration, ...state.data]
  }
}

export default module.reducer
