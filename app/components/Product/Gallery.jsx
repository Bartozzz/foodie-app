// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import type {Product} from "../../types/off/Product";

type ComponentsProps = {
  classes: Object,
  product: Product
};

const Gallery = ({classes, product}: ComponentsProps) => {
  return (
    <Paper className={classes.paper}>
      <img src={product.image_url} className={classes.photo} />

      <Typography variant="headline" component="h1" className={classes.name}>
        {product.product_name}
      </Typography>
    </Paper>
  );
};

export default withStyles((theme: Object) => ({
  paper: {
    position: "relative",

    height: "100%",
    width: "100%",
    minHeight: 60,

    backgroundColor: "black"
  },

  photo: {
    display: "block",

    padding: 0,
    margin: "0 auto",

    maxHeight: "100%",
    maxWidth: "100%"
  },

  name: {
    position: "absolute",
    bottom: 0,

    width: "100%",
    height: "60px",

    lineHeight: "60px",
    textAlign: "center",
    color: "white",

    backgroundImage: "linear-gradient(transparent, black)"
  }
}))(Gallery);
