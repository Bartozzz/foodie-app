// @flow
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createHashHistory} from "history";
import {routerMiddleware, routerActions} from "react-router-redux";
import {createLogger} from "redux-logger";
import rootReducer from "../reducers";
import type {State} from "../types/State";

const history = createHashHistory();

const configureStore = (initialState?: State) => {
  // Redux configuration:
  const middleware = [];
  const enhancers = [];

  // Thunk middleware:
  middleware.push(thunk);

  // Router middleware:
  middleware.push(routerMiddleware(history));

  // Logging middleware: skip redux logs in console during the tests:
  if (process.env.NODE_ENV !== "test") {
    middleware.push(
      createLogger({
        level: "info",
        collapsed: true
      })
    );
  }

  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions
  };

  // If Redux DevTools Extension is installed use it, otherwise use Redux
  // compose:
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionCreators})
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose enhancers:
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create store:
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require("../reducers"))
    );
  }

  return store;
};

export default {configureStore, history};
