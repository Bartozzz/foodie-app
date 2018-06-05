// @flow
import * as React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Products from "../../components/Products";
import {fetchProducts} from "../../actions/products";
import {productFetchSuccess} from "../../actions/product";
import type {Product} from "../../types/off/Product";
import type {Dispatch} from "../../types/Store";
import type {State} from "../../types/State";

type ComponentProps = {
  history: Object,
  products: Array<Product>,
  brand: string,
  count: number,
  page: number,
  changePage: Function,
  fakeFetchProduct: Function
};

class ProductsPage extends React.Component<ComponentProps> {
  onSelect = (id: number) => (e: SyntheticMouseEvent<HTMLButtonElement>) => {
    const {history, products, fakeFetchProduct} = this.props;

    e.preventDefault();
    e.stopPropagation();

    fakeFetchProduct(id, products[id]);
    history.push(`/product/${id}`);
  };

  onChangePage = (event, page) => {
    const {changePage, brand} = this.props;

    // NOTE pages starts from 1 in API
    // NOTE pages starts from 0 in components
    changePage(brand, page + 1);
  };

  render() {
    return (
      <Products
        onSelect={this.onSelect}
        onChangePage={this.onChangePage}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  products: state.products.list,
  brand: state.products.brand,
  count: state.products.count,
  page: state.products.page
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePage(brand, page) {
    return dispatch(fetchProducts(brand, page));
  },

  fakeFetchProduct(id, product) {
    return dispatch(
      productFetchSuccess(id, {
        code: product.code,
        product: product,
        status: 1,
        status_verbose: "product found"
      })
    );
  }
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductsPage);
