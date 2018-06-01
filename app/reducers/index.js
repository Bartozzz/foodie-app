// @flow
import {combineReducers} from "redux";
import {routerReducer as router} from "react-router-redux";
import {productsReducer as products} from "./products";

const rootReducer = combineReducers({
  router,
  products
});

export default rootReducer;
