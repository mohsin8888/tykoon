import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
    user:userReducer,
    login:LoginReducer
})

export default rootReducer;