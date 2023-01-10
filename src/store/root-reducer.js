// makes a combination of all the reducers at a place 
import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from './categories/categories.reducer';


export const rootReducer = combineReducers({
     user : userReducer,
     categories: categoriesReducer,
});