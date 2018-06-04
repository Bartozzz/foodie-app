// @flow
import type {Product} from "./Product";

// https://world.openfoodfacts.org/brand/${BRAND}/${PAGE}.json
export type R_Products = {
  count: number,
  page: string,
  page_size: number,
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
