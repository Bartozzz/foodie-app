// @flow
import type {State} from "./State";
import * as ProductActions from "../actions/product";
import * as ProductsActions from "../actions/products";

// https://gist.github.com/anonymous/9ffb548a38b6c24114d4bad360bfe8f8
type $ExtractReturn<B, F: (...args: any) => B> = B;
type ExtractReturn<F> = $ExtractReturn<*, F>;

// @see https://flow.org/en/docs/react/redux/#toc-typing-redux-action-creators
export type Action =
  | ExtractReturn<typeof ProductActions.productFetchRequest>
  | ExtractReturn<typeof ProductActions.productFetchSuccess>
  | ExtractReturn<typeof ProductActions.productFetchFail>
  | ExtractReturn<typeof ProductsActions.productsFetchRequest>
  | ExtractReturn<typeof ProductsActions.productsFetchSuccess>
  | ExtractReturn<typeof ProductsActions.productsFetchFail>;
