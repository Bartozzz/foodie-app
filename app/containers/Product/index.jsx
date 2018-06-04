// @flow
import * as React from "react";
import {withRouter} from "react-router-dom";
import Product from "../../components/Product";

type Props = {
  match: Object
};

class ProductPage extends React.Component<Props> {
  render() {
    const {match} = this.props;
    const {params} = match;

    return <Product id={Number(params.id)} />;
  }
}

export default withRouter(ProductPage);
