// @flow
import * as React from "react";
import {connect} from "react-redux";
import Loadable from "react-loadable";
import Spinner from "./Spinner";
import Retry from "./Retry";
import type {Dispatch} from "../../types/Store";
import type {State} from "../../types/State";

/**
 * Handles loading and error screens.
 *
 * @param   {Boolean}     isLoading
 * @param   {Boolean}     pastDelay
 * @param   {Error|false} error
 * @param   {Function}    retry
 */
export default function Loading({isLoading, pastDelay, error, retry}) {
  if (pastDelay) {
    return <Spinner />;
  }

  if (error) {
    return <Retry retry={retry} />;
  }

  return null;
}

const mapStateToProps = (state: State) => ({
  isFetching: state.loading.fetching
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // …
});

const ConnectedLoading = connect(
  mapStateToProps,
  mapDispatchToProps
)(({isFetching, children}) => {
  if (isFetching) {
    return <Spinner />;
  } else {
    return children;
  }
});

/**
 * Basic configuration for loadable async components.
 *
 * @param   {Object}    opts
 * @return  {Loadable}
 */
export const loadable = (opts: Object) =>
  Loadable({
    loading: Loading,
    delay: 200,
    ...opts,

    render(Loaded, props) {
      return (
        <ConnectedLoading>
          <Loaded.default {...props} />
        </ConnectedLoading>
      );
    }
  });
