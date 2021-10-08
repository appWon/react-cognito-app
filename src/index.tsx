import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";
import { Amplify } from "aws-amplify";
import { config } from "./lib/config";

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
  },
  API: {
    aws_appsync_graphqlEndpoint:
      "https://lvfcpc6oqza4nl3pcsnstbuj2m.appsync-api.ap-northeast-2.amazonaws.com/graphql",
    aws_appsync_region: config.cognito.REGION,
    aws_appsync_authenticationType: "AWS_IAM",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
