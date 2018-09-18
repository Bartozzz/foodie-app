// @flow
import * as React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "../components/Search";
import {fetchProducts} from "../actions/products";
import type {Dispatch} from "../types/Store";
import type {State} from "../types/State";

type ComponentProps = {
  classes: Object,
  children: React.Node,
  history: Object,
  search: Function
};

class App extends React.Component<ComponentProps> {
  onSearch = terms => {
    const {search, history} = this.props;

    search(terms);
    history.push("/products");
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
              component={Link}
              to="/"
            >
              Foodie
            </Typography>

            <div className={classes.grow} />

            <Search onSearch={this.onSearch} />
          </Toolbar>
        </AppBar>

        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  // …
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  search: (terms: string) => dispatch(fetchProducts(terms))
});

export default compose(
  withRouter,
  withStyles((theme: Object) => ({
    root: {
      display: "flex",
      flexDirection: "column",

      width: "100vw",
      height: "100vh"
    },

    grow: {
      flex: "1"
    },

    title: {
      textDecoration: "none"
    },

    content: {
      flex: "1",

      overflowX: "hidden",
      overflowY: "auto"
    }
  })),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
