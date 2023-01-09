// makes a combination of all the reducers at a place 
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
     user : userReducer
});