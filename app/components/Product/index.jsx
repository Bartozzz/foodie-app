// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Characteristics from "./Characteristics";
import Ingredients from "./Ingredients";
import Nutriments from "./Nutriments";
import Etiquette from "./Etiquette";
import Gallery from "./Gallery";
import Legal from "./Legal";
import type {Product} from "../../types/off/Product";

type ComponentProps = {
  id: number,
  classes: Object,
  product: Product
};

class ProductView extends React.Component<ComponentProps> {
  render() {
    const {product, classes} = this.props;

    return (
      <Grid container spacing={16} className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Gallery product={product} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Characteristics product={product} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Ingredients product={product} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Nutriments product={product} />
        </Grid>

        <Grid item xs={12}>
          <Etiquette product={product} />
        </Grid>

        <Grid item xs={12}>
          <Legal />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles((theme: Object) => ({
  root: {
    margin: "0 auto",
    padding: theme.spacing.unit * 2,

    width: "100%",
    maxWidth: 1000
  }
}))(ProductView);
