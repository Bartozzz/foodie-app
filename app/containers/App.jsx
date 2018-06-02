// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "../components/Search";

type Props = {
  classes: Object,
  children: React.Node
};

const styles = (theme: Object) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    width: "100vw",
    height: "100vh"
  },

  grow: {
    flex: "1"
  },

  content: {
    flex: "1",

    overflowX: "hidden",
    overflowY: "auto"
  }
});

class App extends React.Component<Props> {
  props: Props;

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Foodie
            </Typography>

            <div className={classes.grow} />

            <Search />
          </Toolbar>
        </AppBar>

        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
