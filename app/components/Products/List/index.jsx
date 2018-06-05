// @flow
import * as React from "react";
import ProductItem from "./Item";
import type {Product} from "../../../types/off/Product";

type ComponentProps = {
  page: number,
  count: number,
  brand: string,
  products: Array<Product>,
  onChangePage: Function,
  onSelect: Function
};

class ProductList extends React.Component<ComponentProps> {
  render() {
    const {products} = this.props;

    return (
      <ul>
        {products.map(product => (
          <ProductItem {...product} key={product._id} />
        ))}
      </ul>
    );
  }
}

export default ProductList;
