import { Dispatch } from "redux";
import {
  userInfo,
  AuthState,
  AddUserInfo,
  UpdateError,
  SignInInfo,
  UpdateToken,
  UpdateLoading,
  UpdateAuthState,
} from "./types";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import {
  getSession,
  getAttributes,
  cognitoSignIn,
  cognitoSignOut,
} from "../../lib/cognito";

export const addUserInfo = (userInfo: userInfo): AddUserInfo => ({
  type: "ADD_USER_INFO",
  userInfo,
});

export const updateError = (error: string): UpdateError => ({
  type: "UPDATE_ERROR",
  error,
});

export const updateToken = (accessToken: string): UpdateToken => ({
  type: "UPDATE_TOKEN",
  accessToken,
});

export const updateLoading = (isLoading: boolean): UpdateLoading => ({
  type: "UPDATE_LOADING",
  isLoading,
});

export const updateAuthState = (authState: AuthState): UpdateAuthState => ({
  type: "UPDATE_AUTH_STATE",
  authState,
});

export const signIn =
  (signinInfo: SignInInfo) =>
  async (dispatch: Dispatch<UpdateToken | UpdateError>) => {
    try {
      const authenticated: CognitoUserSession = await cognitoSignIn(signinInfo);

      if (authenticated) {
        const accessToken = authenticated.getAccessToken().getJwtToken();
        dispatch(updateToken(accessToken));
      }

      dispatch(updateError(""));
    } catch (error: any) {
      let errorText = "";

      if (error === "Incorrect username or password.") {
        errorText = "아이디 , 비밀번호를 확인해주세요";
      } else if (error === "Password attempts exceeded") {
        errorText = "비밀번호 입력 횟수를 초과 했습니다.";
      } else if (error === "User is not confirmed.") {
        errorText = "계정 인증이 필요합니다.";
      } else {
        errorText = error;
      }

      dispatch(updateError(errorText));
    }
  };

export const getAuthenticate =
  () =>
  async (dispatch: Dispatch<UpdateError | UpdateAuthState | UpdateLoading>) => {
    try {
      const authenticated: CognitoUserSession = await getSession();

      if (authenticated) {
        const accessToken = authenticated.getAccessToken().getJwtToken();
        const userInfo = await getAttributes();

        dispatch(
          updateAuthState({
            user: userInfo,
            token: accessToken,
            isLoading: true,
            error: "",
          })
        );
      }
    } catch (err) {
      dispatch(updateLoading(true));
      dispatch(updateError("로그인 정보가 없습니다."));
    }
  };

export const signOut = () => (dispatch: Dispatch<UpdateAuthState>) => {
  const userInfo = {
    sub: "",
    name: "",
    email: "",
    email_verified: "",
    phone_number: "",
    phone_number_verified: "",
  };

  dispatch(
    updateAuthState({
      user: userInfo,
      token: "",
      isLoading: false,
      error: "",
    })
  );

  try {
    cognitoSignOut();
  } catch (err) {
    console.error(err);
  }
};
