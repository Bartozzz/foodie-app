import * as React from "react";
import {connect} from "react-redux";
import ProductItem from "./Item";

class ProductGrid extends React.Component {
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

const mapStateToProps = state => ({
  products: state.products.list
});

const mapDispatchToProps = disptach => ({
  // …
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGrid);
