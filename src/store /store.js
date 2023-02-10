//persist library setup
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";


const persistConfig = {
    key:'root',
    storage,
    // we blacklist user as it is comming from firebase
    blacklist : ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const middleWares=[process.env.NODE_ENV=="development" && logger].filter(Boolean)

const composeEnhancers =
  (process.env.NODE_ENV=="development" && typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)