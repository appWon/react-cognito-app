import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
