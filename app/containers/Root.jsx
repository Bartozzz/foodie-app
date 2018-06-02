// @flow
import * as React from "react";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import Routes from "../routes";

type Props = {
  store: {},
  history: {}
};

class Root extends React.Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
