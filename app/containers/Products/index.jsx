// @flow
import * as React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Error from "../../components/Error";
import EmptyImg from "../../images/empty.svg";
import ProductsView from "../../components/Products";
import {fetchProducts} from "../../actions/products";
import {productFetchSuccess} from "../../actions/product";
import type {Product} from "../../types/off/Product";
import type {Dispatch} from "../../types/Store";
import type {State} from "../../types/State";

type ComponentProps = {
  history: Object,
  products: Array<Product>,
  terms: string,
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

  onChangePage = (e: Object, page: number) => {
    const {changePage, terms} = this.props;

    // NOTE pages starts from 1 in API
    // NOTE pages starts from 0 in components
    changePage(terms, page + 1);
  };

  render() {
    const {products} = this.props;

    if (!products || products.length === 0) {
      return <Error message="Products not found!" image={EmptyImg} />;
    }

    return (
      <ProductsView
        {...this.props}
        onSelect={this.onSelect}
        onChangePage={this.onChangePage}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  products: state.products.list,
  terms: state.products.terms,
  count: state.products.count,
  page: state.products.page
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePage(terms, page) {
    return dispatch(fetchProducts(terms, page));
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
