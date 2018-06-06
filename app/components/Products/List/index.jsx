// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ProductItem from "./Item";
import type {Product} from "../../../types/off/Product";

type ComponentProps = {
  classes: Object,
  page: number,
  count: number,
  brand: string,
  products: Array<Product>,
  onChangePage: Function,
  onSelect: Function
};

class ProductList extends React.Component<ComponentProps> {
  render() {
    const {classes, products, onSelect} = this.props;

    return (
      <div className={classes.container}>
        <GridList cellHeight={200} cols={3}>
          {products.map((product, key) => (
            <GridListTile key={product._id} cols={1} rows={1}>
              <ProductItem index={key} product={product} onSelect={onSelect} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles((theme: Object) => ({
  container: {
    margin: "0 auto",
    padding: theme.spacing.unit * 2,

    width: "100%",
    maxWidth: 1000
  }
}))(ProductList);
