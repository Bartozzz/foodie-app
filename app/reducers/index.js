// @flow
import {combineReducers} from "redux";
import {routerReducer as router} from "react-router-redux";
import {loadingReducer as loading} from "./loading";
import {productReducer as product} from "./product";
import {productsReducer as products} from "./products";

const reducers = {
  router,
  loading,
  product,
  products
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
