import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Import thunk correctly
import rootReducer from "./reducers"; // Adjust this path if necessary

const middleware = [thunk];

// Use composeWithDevTools to enable Redux DevTools if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;