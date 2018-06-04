// @flow
import {createStore, applyMiddleware} from "redux";
import {createHashHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import type {State} from "../types/State";

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: State) {
  return createStore(rootReducer, initialState, enhancer);
}

export default {configureStore, history};
