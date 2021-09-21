import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import { signUpType } from "../pages/signup/type.signup";

const userPool: CognitoUserPool = new CognitoUserPool({
  UserPoolId: process.env.REACT_APP_USER_POOL_ID!,
  ClientId: process.env.REACT_APP_CLIENT_ID!,
});

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
