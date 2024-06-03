// reducers/index.js

import { combineReducers } from "redux";
import authReducer from "./features/authSlice"; // Import your authSlice reducer
// Import other reducers if you have any

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
