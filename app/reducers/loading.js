// @flow
import type {Action} from "../types/Action";

import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL
} from "../actions/product";

import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL
} from "../actions/products";

export type LoadingState = {
  +fetching: boolean
};

export const loadingReducer = (
  state: LoadingState = {fetching: false},
  action: Action
): LoadingState => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
    case PRODUCTS_FETCH_REQUEST:
      return {...state, fetching: true};

    case PRODUCT_FETCH_FAIL:
    case PRODUCTS_FETCH_FAIL:
    case PRODUCT_FETCH_SUCCESS:
    case PRODUCTS_FETCH_SUCCESS:
      return {...state, fetching: false};

    default:
      return state;
  }
};
