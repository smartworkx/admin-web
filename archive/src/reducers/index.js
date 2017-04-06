import {combineReducers} from "redux";
import vatReport from "./vatReport";
import journalize from "./journalize";
import importFfs from './importFfs'
import ledgers from "./ledgers";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";


const rootReducer = combineReducers({
  vatReport,
  journalize,
  ledgers,
    importFfs,
  routing: routerReducer,
    form: formReducer,
});

export default rootReducer;
