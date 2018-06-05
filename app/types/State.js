// @flow
import type {LoadingState} from "../reducers/loading";
import type {ProductState} from "../reducers/product";
import type {ProductsState} from "../reducers/products";

export type State = {
  router: Object,
  loading: LoadingState,
  product: ProductState,
  products: ProductsState
};
