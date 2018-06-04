// @flow
import * as React from "react";
import type {Product} from "../../../constants/flow/OpenFoodFactsProduct";

const ProductGridItem = ({product_name}: Product) => (
  <li>
    <p>{product_name}</p>
  </li>
);

export default ProductGridItem;
