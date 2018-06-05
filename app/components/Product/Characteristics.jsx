// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import type {Product} from "../../types/off/Product";

type ComponentsProps = {
  classes: Object,
  product: Product
};

const Characteristics = ({classes, product}: ComponentsProps) => {
  return (
    <Paper className={classes.paper}>
      <Table>
        <TableBody>
          {product.quantity && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Quantity:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.quantity}
              </TableCell>
            </TableRow>
          )}

          {product.packaging && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Packaging:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.packaging.split(",").join(", ")}
              </TableCell>
            </TableRow>
          )}

          {product.brands && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Brands:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.brands.split(",").join(", ")}
              </TableCell>
            </TableRow>
          )}

          {product.categories && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Categories:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.categories.split(",").join(", ")}
              </TableCell>
            </TableRow>
          )}

          {product.stores && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Stores:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.stores.split(",").join(", ")}
              </TableCell>
            </TableRow>
          )}

          {product.purchase_places && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Sold in:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.purchase_places.split(",").join(", ")}
              </TableCell>
            </TableRow>
          )}

          {product.labels && (
            <TableRow>
              <TableCell component="th" scope="row" className={classes.th}>
                Labels, certifications:
              </TableCell>

              <TableCell numeric className={classes.td}>
                {product.labels.split(",").join(", ")}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles((theme: Object) => ({
  paper: {
    height: "100%"
  },

  th: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,

    width: "160px",
    fontWeight: "500"
  },

  td: {
    paddingLeft: theme.spacing.unit
  }
}))(Characteristics);
