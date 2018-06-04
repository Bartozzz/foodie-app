// @flow
import type {Product} from "../types/off/Product";
import type {Action} from "../types/Action";

import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL
} from "../actions/product";

export type ProductState = {
  +id: number,
  +data: Product | Object,
  +fetching: boolean
};

const initialState: ProductState = {
  data: {},
  id: 0,
  fetching: false
};

export const productReducer = (
  state: ProductState = initialState,
  action: Action
): ProductState => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return {...state, fetching: true};

    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        id: action.id,
        data: action.data.product
      };

    default:
      return state;
  }
};
