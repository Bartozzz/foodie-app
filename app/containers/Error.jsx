// @flow
import * as React from "react";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CrossImage from "../images/cross.svg";

type ComponentProps = {
  children: React.Node,
  classes: Object,
  history: Object
};

type ComponentState = {
  hasError: boolean
};

class ErrorBoundary extends React.Component<ComponentProps, ComponentState> {
  unlisten: Function;

  state = {
    hasError: false
  };

  componentDidMount() {
    const {history} = this.props;

    this.unlisten = history.listen((location, action) => {
      this.setState({
        hasError: false
      });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  componentDidCatch(error: Error, info: Object) {
    this.setState({
      hasError: true
    });
  }

  render() {
    const {classes, children} = this.props;
    const {hasError} = this.state;

    if (hasError) {
      return (
        <div className={classes.root}>
          <div className={classes.container}>
            <img src={CrossImage} className={classes.image} />

            <Typography color="textSecondary" variant="subheading">
              Something went wrong!
            </Typography>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default compose(
  withRouter,
  withStyles((theme: Object) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      height: "100%",
      width: "100%"
    },

    container: {
      width: 250,
      height: 230,

      textAlign: "center"
    },

    image: {
      marginBottom: theme.spacing.unit * 2,

      width: 170
    }
  }))
)(ErrorBoundary);
