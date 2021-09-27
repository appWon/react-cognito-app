import { UserInfo } from "aws-sdk/clients/codecommit";

export interface userInfo {
  sub: string;
  name: string;
  email: string;
  email_verified: string;
  phone_number: string;
  phone_number_verified: string;
}

export interface SignInInfo {
  email: string;
  password: string;
}

export interface AuthState {
  user: userInfo;
  token: string;
  error: string;
  isLoading: boolean;
}

export interface AddUserInfo {
  type: "ADD_USER_INFO";
  userInfo: UserInfo;
}

export interface UpdateError {
  type: "UPDATE_ERROR";
  error: string;
}

export interface UpdateToken {
  type: "UPDATE_TOKEN";
  accessToken: string;
}

export interface UpdateLoading {
  type: "UPDATE_LOADING";
  isLoading: boolean;
}

export interface UpdateAuthState {
  type: "UPDATE_AUTH_STATE";
  authState: AuthState;
}

export type authAction =
  | AddUserInfo
  | UpdateError
  | UpdateToken
  | UpdateLoading
  | UpdateAuthState;
