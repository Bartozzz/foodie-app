// @flow
import type {
  ProductsState,
  ProductsAction,
  ProductsDispatcher
} from "../reducers/products";

import type {Response} from "../constants/flow/openFoodFacts";

export const PRODUCTS_FETCH_REQUEST = "PRODUCTS_FETCH_REQUEST";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
export const PRODUCTS_FETCH_FAIL = "PRODUCTS_FETCH_FAIL";

export const productsFetchRequest = (brand: string) => ({
  type: PRODUCTS_FETCH_REQUEST,
  brand
});

export const productsFetchSuccess = (brand: string, data: Response) => {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    brand,
    data
  };
};

export const productsFetchFail = (brand: string, error: Error) => ({
  type: PRODUCTS_FETCH_FAIL,
  brand,
  error
});

export const fetchProducts = (brand: string, page: number = 1) => (
  dispatch: ProductsDispatcher
) => {
  dispatch(productsFetchRequest(brand));

  return fetch(`https://world.openfoodfacts.org/brand/${brand}/${page}.json`)
    .then(response => response.json())
    .then((json: Response) => dispatch(productsFetchSuccess(brand, json)))
    .catch((error: Error) => dispatch(productsFetchFail(brand, error)));
};
