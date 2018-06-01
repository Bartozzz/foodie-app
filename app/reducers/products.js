import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL
} from "../actions/products";

const initialState = {
  count: 0,
  list: [],
  brand: null,
  fetching: false
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return {...state, fetching: true};
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        brand: action.brand,
        count: action.data.count,
        list: action.data.products
      };
    default:
      return state;
  }
};
