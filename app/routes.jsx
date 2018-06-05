import * as React from "react";
import {Switch, Route} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import amber from "@material-ui/core/colors/amber";
import lightGreen from "@material-ui/core/colors/lightGreen";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import ErrorBoundary from "./containers/Error";
import Loader from "./containers/Loader";
import App from "./containers/App";

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: amber
  }
});

const AsyncHome = Loader({
  loader: () => import("./containers/Home")
});

const AsyncProduct = Loader({
  loader: () => import("./containers/Product")
});

const AsyncProducts = Loader({
  loader: () => import("./containers/Products")
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <App>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/products" component={AsyncProducts} />
          <Route path="/product/:id" component={AsyncProduct} />
        </Switch>
      </ErrorBoundary>
    </App>
  </MuiThemeProvider>
);
