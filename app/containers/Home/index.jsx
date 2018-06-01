// @flow
import * as React from "react";
import Products from "../../components/Products";

type Props = {};

class HomePage extends React.Component<Props> {
  props: Props;

  render() {
    return <Products />;
  }
}

export default HomePage;
