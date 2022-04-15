import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import {
//   turnGetReducer } from './reducers/turnReducers'

const initialState = {};

const reducer = combineReducers({
  // productList: productListReducer,
  // turnGet: turnGetReducer

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
