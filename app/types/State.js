// @flow
import type {ProductState} from "../reducers/product";
import type {ProductsState} from "../reducers/products";

export type State = {
  router: Object,
  product: ProductState,
  products: ProductsState
};
