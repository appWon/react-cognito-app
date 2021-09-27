import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./routes/Route";

import Main from "./pages/main";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import DashBoard from "./pages/dashbord";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={DashBoard} />
        <PrivateRoute exact path="/" component={Main} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
