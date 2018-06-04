// @flow
import * as React from "react";
import {connect} from "react-redux";
import ProductGrid from "./Grid";
import ProductList from "./List";
import ProductTable from "./Table";
import type {Dispatch} from "redux";

type Props = {
  onSelect: Function
};

type State = {
  mode: string
};

class Products extends React.Component<Props, State> {
  state = {
    mode: "TABLE"
  };

  render() {
    const {onSelect} = this.props;

    switch (this.state.mode) {
      case "GRID":
        return <ProductGrid onSelect={onSelect} />;
      case "LIST":
        return <ProductList onSelect={onSelect} />;
      default:
        return <ProductTable onSelect={onSelect} />;
    }
  }
}

const mapStateToProps = (state: Object) => ({
  // …
});

const mapDispatchToProps = (disptach: Dispatch) => ({
  // …
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
