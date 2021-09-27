import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthState, authReducer } from "./auth";

export interface reducerType {
  auth: AuthState;
}

const reducer = combineReducers({
  auth: authReducer,
});

//provider store
export const store = createStore(reducer, applyMiddleware(thunk));
