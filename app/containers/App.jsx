// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

type Props = {
  classes: Object,
  children: React.Node
};

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "stretch",
    width: "100%"
  },
  grow: {
    flex: "1 1 auto"
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
          </Toolbar>
        </AppBar>

        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(App);
