// @flow
import * as React from "react";
import {compose} from "recompose";
import {withRouter, Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "../components/Search";

type Props = {
  classes: Object,
  children: React.Node,
  history: Object
};

class App extends React.Component<Props> {
  navigate = location => () => {
    this.props.history.push(location);
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

            <Search onSearch={this.navigate("/products")} />
          </Toolbar>
        </AppBar>

        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

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
  }))
)(App);
