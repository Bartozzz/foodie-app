// @flow
import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL
} from "../actions/product";

import type {Response, Product} from "../constants/flow/openFoodFacts";

export type ProductState = {
  +id: number,
  +data: Product | Object,
  +fetching: boolean
};

export type ProductAction = {
  +type: string,
  +id?: number,
  +data?: Product,
  +error?: Error
};

export type ProductDispatcher = (action: ProductAction) => void;

const initialState: ProductState = {
  data: {},
  id: 0,
  fetching: false
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return {...state, fetching: true};

    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        id: action.id,
        data: action.data
      };

    default:
      return state;
  }
};
