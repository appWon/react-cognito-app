import { AuthState, authAction } from "./types";

const initAuthState: AuthState = {
  user: {
    sub: "",
    name: "",
    email: "",
    email_verified: "",
    phone_number: "",
    phone_number_verified: "",
  },
  token: "",
  error: "",
  isLoading: false,
};

export const authReducer = (state = initAuthState, action: authAction) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return {
        ...state,
        user: action.userInfo,
      };
    case "UPDATE_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.accessToken,
      };
    case "UPDATE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "UPDATE_AUTH_STATE":
      return {
        ...action.authState,
      };
    default:
      return state;
  }
};
