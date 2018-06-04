// @flow
import type {R_Product} from "../types/off/Responses";
import type {Dispatch} from "../types/Store";

export const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST";
export const PRODUCT_FETCH_SUCCESS = "PRODUCT_FETCH_SUCCESS";
export const PRODUCT_FETCH_FAIL = "PRODUCT_FETCH_FAIL";

export const productFetchRequest = (id: number) => ({
  type: PRODUCT_FETCH_REQUEST,
  id
});

export const productFetchSuccess = (id: number, data: R_Product) => ({
  type: PRODUCT_FETCH_SUCCESS,
  id,
  data
});

export const productFetchFail = (id: number, error: Error) => ({
  type: PRODUCT_FETCH_FAIL,
  id,
  error
});

export const fetchProduct = (id: number) => (dispatch: Dispatch) => {
  dispatch(productFetchRequest(id));

  return fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
    .then(response => response.json())
    .then((json: R_Product) => dispatch(productFetchSuccess(id, json)))
    .catch((error: Error) => dispatch(productFetchFail(id, error)));
};
