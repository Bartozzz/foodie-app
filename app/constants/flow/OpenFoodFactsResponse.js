// @flow
import type {Product} from "./OpenFoodFactsProduct";

export type ProductsResp = {
  count: number,
  page: string,
  page_size: number,
  skip: number,
  products: Array<Product>
};

export type ProductResp = {
  code: string,
  status: number,
  status_verbose: string,
  product: Product
};
