// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

type ComponentTypes = {
  classes: Object,
  retry: Function
};

class Retry extends React.Component<ComponentTypes> {
  render() {
    const {classes, retry} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography>Sorry, there was a problem loading the page.</Typography>

          <Button onClick={retry}>Retry</Button>
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
}))(Retry);
