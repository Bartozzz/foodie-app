// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Error from "../Error";
import type {Product} from "../../types/off/Product";

type ComponentsProps = {
  classes: Object,
  product: Product
};

const Ingredients = ({classes, product}: ComponentsProps) => {
  if (!product.ingredients || product.ingredients.length === 0) {
    return (
      <Paper className={classes.paper}>
        <Error message="No ingredients data for this product!" />
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="headline" component="h2">
        Ingredients
      </Typography>

      <Typography variant="subheading">
        {product.ingredients.map(i => i.text).join(", ")}
      </Typography>
    </Paper>
  );
};

export default withStyles((theme: Object) => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%"
  }
}))(Ingredients);
