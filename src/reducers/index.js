import { combineReducers } from 'redux';
import counter from './counter';
import vatReport from './vatReport'

const rootReducer = combineReducers({
  counter, vatReport
});

export default rootReducer;
