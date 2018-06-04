// @flow
import * as React from "react";
import type {Product} from "../../../types/off/Product";

const ProductItem = ({product_name}: Product) => (
  <li>
    <p>{product_name}</p>
  </li>
);

export default ProductItem;
