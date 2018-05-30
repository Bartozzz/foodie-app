// @flow
import {createStore, applyMiddleware} from "redux";
import {createHashHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: Object) {
  return createStore(rootReducer, initialState, enhancer);
}

export default {configureStore, history};
