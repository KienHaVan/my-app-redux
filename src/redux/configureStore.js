import { createStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Counter";

const reducer = combineReducers({
  //key: value
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
