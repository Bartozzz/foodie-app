// @flow
import * as React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Products from "../../components/Products";
import {productFetchSuccess} from "../../actions/product";

type Props = {
  history: Object,
  products: Object,
  fakeFetchProduct: Function
};

class ProductsPage extends React.Component<Props> {
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

const mapStateToProps = (state: Object) => ({
  products: state.products.list
});

const mapDispatchToProps = (disptach: Dispatch) => ({
  fakeFetchProduct: (id, data) => disptach(productFetchSuccess(id, data))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductsPage);
