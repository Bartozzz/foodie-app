// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
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

class ProductTable extends React.Component<ComponentProps> {
  render() {
    const {products, page, count, classes, onSelect, onChangePage} = this.props;

    return (
      <div className={classes.root}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="none">{/* Image */}</TableCell>
                <TableCell padding="none">Name</TableCell>
                <TableCell className={classes.small}>Energy</TableCell>
                <TableCell className={classes.small}>Fat</TableCell>
                <TableCell className={classes.small}>Salt</TableCell>
                <TableCell className={classes.small}>Carbs</TableCell>
                <TableCell className={classes.small}>Protein</TableCell>
                <TableCell>{/* Button */}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product, key) => (
                <ProductItem
                  key={product._id}
                  index={key}
                  product={product}
                  onSelect={onSelect}
                />
              ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={count}
            page={page - 1}
            rowsPerPage={20}
            rowsPerPageOptions={[20]}
            onChangePage={onChangePage}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles((theme: Object) => ({
  root: {
    margin: "0 auto",
    padding: theme.spacing.unit * 2,

    width: "100%",
    maxWidth: 1000
  },

  small: {
    padding: `0 ${theme.spacing.unit * 2}px`,
    textAlign: "right"
  }
}))(ProductTable);
