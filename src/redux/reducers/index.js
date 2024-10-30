import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import { LoginReducer } from "./LoginReducer";
 import socialMediaReducer from "./SocialMediaReducer";
const rootReducer = combineReducers({
    user:userReducer,
    m:LoginReducer,
    social:socialMediaReducer
})

export default rootReducer;