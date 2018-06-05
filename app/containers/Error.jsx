// @flow
import * as React from "react";
import {withRouter} from "react-router-dom";
import Error from "../components/Error";
import CrossImage from "../images/cross.svg";

type ComponentProps = {
  children: React.Node,
  history: Object
};

type ComponentState = {
  hasError: boolean,
  error: ?Error,
  info: ?Object
};

class ErrorBoundary extends React.Component<ComponentProps, ComponentState> {
  unlisten: Function;

  state = {
    hasError: false,
    error: null,
    info: null
  };

  componentDidMount() {
    const {history} = this.props;

    // Reset error boundary on route change, e.g. when user click the logo in
    // order to return to home page:
    this.unlisten = history.listen(() => this.setState({hasError: false}));
  }

  componentWillUnmount() {
    this.unlisten();
  }

  componentDidCatch(error: Error, info: Object) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }

  render() {
    const {children} = this.props;
    const {hasError} = this.state;

    if (hasError) {
      return <Error message="Something went wrong!" image={CrossImage} />;
    }

    return children;
  }
}

export default withRouter(ErrorBoundary);
