import * as React from "react";
import {Switch, Route} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import amber from "@material-ui/core/colors/amber";
import lightGreen from "@material-ui/core/colors/lightGreen";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import App from "./containers/App";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Products from "./containers/Products";

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: amber
  }
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <App>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </App>
  </MuiThemeProvider>
);
