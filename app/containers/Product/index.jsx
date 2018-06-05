// @flow
import * as React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ProductView from "../../components/Product";
import type {Product} from "../../types/off/Product";
import type {Dispatch} from "../../types/Store";
import type {State} from "../../types/State";

type ComponentProps = {
  match: Object,
  product: Product
};

class ProductPage extends React.Component<ComponentProps> {
  render() {
    const {match, product} = this.props;
    const {params} = match;

    return <ProductView id={Number(params.id)} product={product} />;
  }
}

const mapStateToProps = (state: State) => ({
  product: state.product.data
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // …
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductPage);
