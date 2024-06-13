// reducers/index.js

import { combineReducers } from "redux";

import languageReducer from "./features/languageSlice";
import bankDetailsSlice from "./features/bankDetailsSlice";
// Import other reducers if you have any

const rootReducer = combineReducers({
  language: languageReducer,
  bankDetails: bankDetailsSlice,
});

export default rootReducer;
