// 1) createStore
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/Index";
import { thunk } from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default Store;