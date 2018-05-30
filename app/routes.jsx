import * as React from "react";
import {Switch, Route} from "react-router";
import App from "./containers/App";
import Home from "./containers/Home";

export default () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </App>
);
