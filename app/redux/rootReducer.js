// reducers/index.js

import { combineReducers } from "redux";

import languageReducer from "./features/languageSlice";
// Import other reducers if you have any

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
