import {combineReducers} from 'redux'

export default combineReducers({

})

export const getEntities = (state, entityName) => {
  return state.entities[entityName].data
}
