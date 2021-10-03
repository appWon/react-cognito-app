import { reducerType } from "./index";

export const authSelector = (state: reducerType) => state.auth;
export const adminSelector = (state: reducerType) => state.admin;
