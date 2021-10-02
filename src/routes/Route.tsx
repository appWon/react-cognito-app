import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { AuthState, getAuthenticate } from "../store/auth";
import { authSelector } from "../store/selector";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { token, isLoading }: AuthState = useSelector(authSelector);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAuthenticate());
  }, []);

  return !isLoading ? (
    <>
      <Component />
      <div>로딩 중</div>
    </>
  ) : (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
