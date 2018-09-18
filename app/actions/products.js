// @flow
import type {R_Products} from "../types/off/Responses";
import type {Dispatch} from "../types/Store";

export const PRODUCTS_FETCH_REQUEST = "PRODUCTS_FETCH_REQUEST";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
export const PRODUCTS_FETCH_FAIL = "PRODUCTS_FETCH_FAIL";

export const productsFetchRequest = (terms: string) => ({
  type: PRODUCTS_FETCH_REQUEST,
  terms
});

export const productsFetchSuccess = (terms: string, data: R_Products) => ({
  type: PRODUCTS_FETCH_SUCCESS,
  terms,
  data
});

export const productsFetchFail = (terms: string, error: Error) => ({
  type: PRODUCTS_FETCH_FAIL,
  terms,
  error
});

export const fetchProducts = (terms: string, page: number = 1) => (
  dispatch: Dispatch
) => {
  dispatch(productsFetchRequest(terms));

  return fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${terms}&page=${page}&json=1`
  )
    .then(response => response.json())
    .then((json: R_Products) => dispatch(productsFetchSuccess(terms, json)))
    .catch((error: Error) => dispatch(productsFetchFail(terms, error)));
};
