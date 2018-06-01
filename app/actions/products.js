export const PRODUCTS_FETCH_REQUEST = "PRODUCTS_FETCH_REQUEST";
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS";
export const PRODUCTS_FETCH_FAIL = "PRODUCTS_FETCH_FAIL";

export const productsFetchRequest = brand => ({
  type: PRODUCTS_FETCH_REQUEST,
  brand
});

export const productsFetchSuccess = (brand, data) => {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    brand,
    data
  };
};

export const productsFetchFail = (brand, error) => ({
  type: PRODUCTS_FETCH_FAIL,
  brand,
  error
});

export const fetchProducts = brand => dispatch => {
  dispatch(productsFetchRequest(brand));

  return fetch(`https://world.openfoodfacts.org/brand/${brand}.json`)
    .then(response => response.json())
    .then(json => dispatch(productsFetchSuccess(brand, json)))
    .catch(err => dispatch(productsFetchFail(brand, err)));
};
