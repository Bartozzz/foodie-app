// @flow
import type {Product} from "./Product";

// https://world.openfoodfacts.org/brand/${BRAND}/${PAGE}.json
// https://world.openfoodfacts.org/cgi/search.pl?search_terms=${TERMS}&page=${PAGE}&json=1
export type R_Products = {
  count: number,
  page: string | number,
  page_size: string | number,
  skip: number,
  products: Array<Product>
};

// https://world.openfoodfacts.org/api/v0/product/${BARCODE}.json
export type R_Product = {
  code: string,
  status: number,
  status_verbose: string,
  product: Product
};
