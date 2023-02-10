//persist library setup
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import thunk from 'redux-thunk'

const myLogger = (store) => (next) => (action) => {
    if(!action) return next(action)

    console.log('type: ' , action.type)
    console.log('payload: ', action.payload)
    console.log('current-state: ' , store.getState())

    //pass action to next middlewares and finally to the reducer 
    next(action)

    // after state is being passed to the components

    console.log('new-state: ' , store.getState())

}

const persistConfig = {
    key:'root',
    storage,
    // we blacklist user as it is comming from firebase
    whitelist : ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const middleWares=[process.env.NODE_ENV==="development" && logger,thunk,].filter(Boolean)

const composeEnhancers =
  (process.env.NODE_ENV==="development" && typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)