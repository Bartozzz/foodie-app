// @flow
import * as React from "react";
import ProductList from "./List";
import ProductTable from "./Table";
import type {Product} from "../../types/off/Product";

type ComponentProps = {
  products: Array<Product>,
  brand: string,
  count: number,
  page: number,
  onChangePage: Function,
  onSelect: Function
};

type ComponentState = {
  mode: string
};

class Products extends React.Component<ComponentProps, ComponentState> {
  state = {
    mode: "TABLE"
  };

  render() {
      case "LIST":
        return <ProductList {...this.props} />;
      default:
        return <ProductTable {...this.props} />;
    }
  }
}

export default Products;
