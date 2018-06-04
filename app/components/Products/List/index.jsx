// @flow
import * as React from "react";
import {connect} from "react-redux";
import ProductItem from "./Item";
import type {Product} from "../../../types/off/Product";
import type {Dispatch} from "../../../types/Store";
import type {State} from "../../../types/State";

type ComponentProps = {
  products: Array<Product>
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

const mapStateToProps = (state: State) => ({
  products: state.products.list
});

const mapDispatchToProps = (disptach: Dispatch) => ({
  // …
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
