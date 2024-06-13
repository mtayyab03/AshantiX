// reducers/index.js

import { combineReducers } from "redux";

import languageReducer from "./features/languageSlice";
import bankDetailsSlice from "./features/bankDetailsSlice";
import transferReducer from "./features/transferSlice";
import recipientReducer from "./features/recipientSlice";
// Import other reducers if you have any

const rootReducer = combineReducers({
  language: languageReducer,
  bankDetails: bankDetailsSlice,
  transfer: transferReducer,
  recipient: recipientReducer,
});

export default rootReducer;
