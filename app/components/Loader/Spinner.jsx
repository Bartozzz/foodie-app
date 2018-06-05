// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

type ComponentTypes = {
  classes: Object
};

class Spinner extends React.Component<ComponentTypes> {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <CircularProgress size={100} />
        </div>
      </div>
    );
  }
}

export default withStyles((theme: Object) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "100%"
  },

  container: {
    textAlign: "center"
  }
}))(Spinner);
