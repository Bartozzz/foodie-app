// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import type {Product} from "../../../types/off/Product";

type ComponentProps = {
  index: number,
  classes: Object,
  product: Product,
  onSelect: Function
};

const ProductItem = ({classes, product, index, onSelect}: ComponentProps) => (
  <div className={classes.container} onClick={onSelect(index)}>
    <img className={classes.image} src={product.image_small_url} />

    <GridListTileBar
      className={classes.titleBar}
      title={product.product_name}
      titlePosition="top"
    />
  </div>
);

export default withStyles((theme: Object) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#161616",

    width: "100%",
    height: "100%",

    cursor: "pointer"
  },

  image: {
    width: "100%",
    maxWidth: "100%"
  },

  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}))(ProductItem);
