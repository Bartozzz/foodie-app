import * as React from "react";
import {connect} from "react-redux";
import ProductGrid from "./Grid";
import ProductList from "./List";
import ProductTable from "./Table";

class Products extends React.Component {
  state = {
    mode: "TABLE"
  };

  render() {
    switch (this.state.mode) {
      case "GRID":
        return <ProductGrid />;
      case "LIST":
        return <ProductList />;
      default:
        return <ProductTable />;
    }
  }
}

const mapStateToProps = state => ({
  // …
});

const mapDispatchToProps = disptach => ({
  // …
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
