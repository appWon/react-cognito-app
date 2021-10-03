import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthState, authReducer } from "./auth";
import { AdminState, adminReducer } from "./admin";

export interface reducerType {
  auth: AuthState;
  admin: AdminState;
}

const reducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
});

//provider store
export const store = createStore(reducer, applyMiddleware(thunk));
