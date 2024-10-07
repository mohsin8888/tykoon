import { combineReducers } from "redux";
// admin reducers
import authReducer_admin from "./admin/authReducer_admin";

// import other reducers here if any

const appReducer = combineReducers({
  // admin
  authReducer_admin,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
