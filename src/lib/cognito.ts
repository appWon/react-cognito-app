import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUserSession,
} from "amazon-cognito-identity-js";

import { signUpType } from "../pages/signup/type.signup";
import { SignInInfo, userInfo } from "../store/auth";

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID!,
  ClientId: process.env.REACT_APP_CLIENT_ID!,
};

const userPool = new CognitoUserPool(poolData);
let currentUser: any = userPool.getCurrentUser();

/////////////////////////////////////////////////////
////                    로그인                    ////
////////////////////////////////////////////////////
export const cognitoSignIn = async ({
  email,
  password,
}: SignInInfo): Promise<CognitoUserSession> => {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: email.trim(),
      Password: password.trim(),
    });
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve(result);
        // if (!currentUser) {
        //   currentUser = userPool.getCurrentUser();
        // }

        // currentUser.getSession((err: any, session: CognitoUserSession) => {
        //   if (err) {
        //     reject(err);
        //   } else {
        //     resolve(session);
        //   }
        // });
      },
      onFailure: reject,
    });
  });
};

/////////////////////////////////////////////////////
////                   회원가입                    ////
////////////////////////////////////////////////////
export const cognitoSignUp = async ({
  email,
  password,
  name,
  phoneNumber,
}: signUpType) => {
  return new Promise((resolve, reject) => {
    const attributeList: any = [
      new CognitoUserAttribute({
        Name: "phone_number",
        Value: `+82${phoneNumber.substr(1)}`,
      }),
      new CognitoUserAttribute({
        Name: "name",
        Value: name,
      }),
    ];

    userPool.signUp(email, password, attributeList, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

/////////////////////////////////////////////////////
////                  로그인 세션                  ////
///////////////////////////////////////////////////
export const getSession = async (): Promise<CognitoUserSession> => {
  if (!currentUser) {
    currentUser = userPool.getCurrentUser();
  }

  return new Promise((resolve, reject) => {
    currentUser.getSession((err: any, session: any) => {
      if (err) reject(err);

      resolve(session);
    });
  });
};

/////////////////////////////////////////////////////
////                로그인 유저 정보                ////
///////////////////////////////////////////////////
export const getAttributes = async () => {
  return new Promise<userInfo>((resolve, reject) => {
    if (!currentUser) {
      currentUser = userPool.getCurrentUser();
    }

    currentUser.getUserAttributes((err: any, attributes: any) => {
      if (err) {
        reject(err);
      } else {
        const parseObject = attributes.reduce(
          (currentItem: any, item: { Name: string; Value: String }) => {
            return { ...currentItem, [item.Name]: item.Value };
          },
          {}
        );
        resolve(parseObject);
      }
    });
  });
};

export const setAttribute = async (attribute: any) => {
  return new Promise(function (resolve, reject) {
    const attributeList = [];
    const res = new CognitoUserAttribute(attribute);
    attributeList.push(res);

    if (!currentUser) {
      currentUser = userPool.getCurrentUser();
    }

    currentUser.updateAttributes(attributeList, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const signOut = () => {
  if (currentUser) {
    currentUser.signOut();
  }
};
