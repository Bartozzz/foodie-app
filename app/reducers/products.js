// @flow
import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL
} from "../actions/products";

import type {Response, Product} from "../constants/flow/openFoodFacts";

export type ProductsState = {
  +count: number,
  +page: number,
  +list: Array<Product>,
  +brand: string,
  +fetching: boolean
};

export type ProductsAction = {
  +type: string,
  +brand?: string,
  +data?: Response,
  +error?: Error
};

export type ProductsDispatcher = (action: ProductsAction) => void;

const initialState: ProductsState = {
  count: 0,
  page: 1,
  list: [],
  brand: "",
  fetching: false
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return {...state, fetching: true};

    case PRODUCTS_FETCH_SUCCESS:
      // $FlowFixMe
      const data: Response = action.data;

      return {
        ...state,
        fetching: false,
        brand: action.brand,
        count: data.count,
        page: Number(data.page),
        list: data.products
      };

    default:
      return state;
  }
};
