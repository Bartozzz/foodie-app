// @flow
import {combineReducers} from "redux";
import {routerReducer as router} from "react-router-redux";
import {productReducer as product} from "./product";
import {productsReducer as products} from "./products";

const rootReducer = combineReducers({
  router,
  product,
  products
});

export default rootReducer;
