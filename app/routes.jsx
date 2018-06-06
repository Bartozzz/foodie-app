import * as React from "react";
import {Switch, Route} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import lime from "@material-ui/core/colors/lime";
import lightGreen from "@material-ui/core/colors/lightGreen";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import ErrorBoundary from "./containers/Error";
import Loader from "./containers/Loader";
import App from "./containers/App";

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000"
    }
  },

  shadows: [
    "none",
    "0 1px 3px 0px rgba(0, 0, 0, 0.1), 0 1px 1px 0px rgba(0, 0, 0, 0.05), 0 2px 1px -1px rgba(0, 0, 0, 0.05)",
    "0 1px 5px 0px rgba(0, 0, 0, 0.15), 0 2px 2px 0px rgba(0, 0, 0, 0.05), 0 3px 1px -2px rgba(0, 0, 0, 0.05)",
    "0 3px 1px -1px rgba(0, 0, 0, 0.1), 0 3px 4px 0px rgba(0, 0, 0, 0.05), 0 3px 3px -2px rgba(0, 0, 0, 0.05)",
    "0 3px 5px -1px rgba(0, 0, 0, 0.1), 0 3px 4px 0px rgba(0, 0, 0, 0.05), 0 3px 3px -2px rgba(0, 0, 0, 0.05)",
    "0 3px 5px -1px rgba(0, 0, 0, 0.1), 0 5px 8px 0px rgba(0, 0, 0, 0.05), 0 1px 14px 0px rgba(0, 0, 0, 0.05)",
    "0 3px 5px -1px rgba(0, 0, 0, 0.1), 0 6px 10px 0px rgba(0, 0, 0, 0.05), 0 1px 18px 0px rgba(0, 0, 0, 0.05)",
    "0 4px 5px -2px rgba(0, 0, 0, 0.1), 0 7px 10px 1px rgba(0, 0, 0, 0.05), 0 2px 16px 1px rgba(0, 0, 0, 0.05)",
    "0 5px 5px -3px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.05), 0 3px 14px 2px rgba(0, 0, 0, 0.05)",
    "0 5px 6px -3px rgba(0, 0, 0, 0.1), 0 9px 12px 1px rgba(0, 0, 0, 0.05), 0 3px 16px 2px rgba(0, 0, 0, 0.05)",
    "0 6px 6px -3px rgba(0, 0, 0, 0.1), 0 10px 14px 1px rgba(0, 0, 0, 0.05), 0 4px 18px 3px rgba(0, 0, 0, 0.05)",
    "0 6px 7px -4px rgba(0, 0, 0, 0.1), 0 11px 15px 1px rgba(0, 0, 0, 0.05), 0 4px 20px 3px rgba(0, 0, 0, 0.05)",
    "0 7px 8px -4px rgba(0, 0, 0, 0.1), 0 12px 17px 2px rgba(0, 0, 0, 0.05), 0 5px 22px 4px rgba(0, 0, 0, 0.05)",
    "0 7px 8px -4px rgba(0, 0, 0, 0.1), 0 13px 19px 2px rgba(0, 0, 0, 0.05), 0 5px 24px 4px rgba(0, 0, 0, 0.05)",
    "0 7px 9px -4px rgba(0, 0, 0, 0.1), 0 14px 21px 2px rgba(0, 0, 0, 0.05), 0 5px 26px 4px rgba(0, 0, 0, 0.05)",
    "0 8px 9px -5px rgba(0, 0, 0, 0.1), 0 15px 22px 2px rgba(0, 0, 0, 0.05), 0 6px 28px 5px rgba(0, 0, 0, 0.05)",
    "0 8px 10px -5px rgba(0, 0, 0, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.05), 0 6px 30px 5px rgba(0, 0, 0, 0.05)",
    "0 8px 11px -5px rgba(0, 0, 0, 0.1), 0 17px 26px 2px rgba(0, 0, 0, 0.05), 0 6px 32px 5px rgba(0, 0, 0, 0.05)",
    "0 9px 11px -5px rgba(0, 0, 0, 0.1), 0 18px 28px 2px rgba(0, 0, 0, 0.05), 0 7px 34px 6px rgba(0, 0, 0, 0.05)",
    "0 9px 12px -6px rgba(0, 0, 0, 0.1), 0 19px 29px 2px rgba(0, 0, 0, 0.05), 0 7px 36px 6px rgba(0, 0, 0, 0.05)",
    "0 10px 13px -6px rgba(0, 0, 0, 0.1), 0 20px 31px 3px rgba(0, 0, 0, 0.05), 0 8px 38px 7px rgba(0, 0, 0, 0.05)",
    "0 10px 13px -6px rgba(0, 0, 0, 0.1), 0 21px 33px 3px rgba(0, 0, 0, 0.05), 0 8px 40px 7px rgba(0, 0, 0, 0.05)",
    "0 10px 14px -6px rgba(0, 0, 0, 0.1), 0 22px 35px 3px rgba(0, 0, 0, 0.05), 0 8px 42px 7px rgba(0, 0, 0, 0.05)",
    "0 11px 14px -7px rgba(0, 0, 0, 0.1), 0 23px 36px 3px rgba(0, 0, 0, 0.05), 0 9px 44px 8px rgba(0, 0, 0, 0.05)",
    "0 11px 15px -7px rgba(0, 0, 0, 0.1), 0 24px 38px 3px rgba(0, 0, 0, 0.05), 0 9px 46px 8px rgba(0, 0, 0, 0.05)"
  ]
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
