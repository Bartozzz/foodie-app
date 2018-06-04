// @flow
import * as React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Products from "../../components/Products";
import {productFetchSuccess} from "../../actions/product";
import type {Dispatch} from "../../types/Store";
import type {State} from "../../types/State";

type ComponentProps = {
  history: Object,
  products: Object,
  fakeFetchProduct: Function
};

class ProductsPage extends React.Component<ComponentProps> {
  onProductSelect = (id: number) => (
    event: SyntheticMouseEvent<HTMLButtonElement>
  ) => {
    const {history, products, fakeFetchProduct} = this.props;

    event.preventDefault();
    event.stopPropagation();

    fakeFetchProduct(id, products[id]);
    history.push(`/product/${id}`);
  };

  render() {
    return <Products onSelect={this.onProductSelect} />;
  }
}

const mapStateToProps = (state: State) => ({
  products: state.products.list
});

const mapDispatchToProps = (disptach: Dispatch) => ({
  fakeFetchProduct: (id, product) =>
    disptach(
      productFetchSuccess(id, {
        code: product.code,
        product: product,
        status: 1,
        status_verbose: "product found"
      })
    )
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductsPage);
