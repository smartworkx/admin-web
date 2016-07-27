import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {browserHistory} from 'react-router'
import {routerMiddleware} from "react-router-redux";

const middleware = routerMiddleware(browserHistory);

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer, applyMiddleware(middleware));
}
