import React from "react";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./routes/Route";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Admin from "./pages/admin";
import Upload from "./pages/upload";

import { getAuthenticate } from "./store/auth";

require("./App.css");

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAuthenticate());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/upload" component={Upload} />
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
