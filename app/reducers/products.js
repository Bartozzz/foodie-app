// @flow
import type {Product} from "../constants/flow/openFoodFacts";
import type {Action} from "../types/Action";

import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL
} from "../actions/products";

export type ProductsState = {
  +count: number,
  +page: number,
  +list: Array<Product>,
  +brand: string,
  +fetching: boolean
};

const initialState: ProductsState = {
  count: 0,
  page: 1,
  list: [],
  brand: "",
  fetching: false
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return {...state, fetching: true};

    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        brand: action.brand,
        count: action.data.count,
        page: Number(action.data.page),
        list: action.data.products
      };

    default:
      return state;
  }
};
