// @flow
import * as React from "react";
import {connect} from "react-redux";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import {fetchProducts} from "../../../actions/products";
import type {Dispatch} from "../../../types/Store";
import type {State} from "../../../types/State";
import type {Product} from "../../../types/off/Product";

type ComponentProps = {
  classes: Object,
  page: number,
  count: number,
  brand: string,
  products: Array<Product>,
  changePage: Function,
  onSelect: Function
};

const styles = (theme: Object) => ({
  root: {
    margin: "0 auto",
    padding: theme.spacing.unit * 2,

    width: "100%",
    maxWidth: 1000
  },

  small: {
    padding: `0 ${theme.spacing.unit * 2}px`,
    textAlign: "right"
  },

  avatar: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
});

class ProductTable extends React.Component<ComponentProps> {
  handleChangePage = (event, page) => {
    const {changePage, brand} = this.props;

    // NOTE pages starts from 1 in API
    // NOTE pages starts from 0 in components
    changePage(brand, page + 1);
  };

  render() {
    const {products, page, count, classes, onSelect} = this.props;

    return (
      <div className={classes.root}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="none" />
                <TableCell padding="none">Name</TableCell>
                <TableCell className={classes.small}>Energy</TableCell>
                <TableCell className={classes.small}>Fat</TableCell>
                <TableCell className={classes.small}>Salt</TableCell>
                <TableCell className={classes.small}>Carbs</TableCell>
                <TableCell className={classes.small}>Protein</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product, key) => (
                <TableRow key={product._id} hover>
                  <TableCell padding="none">
                    <Avatar
                      alt={product.product_name}
                      src={product.image_small_url}
                      className={classes.avatar}
                    />
                  </TableCell>

                  <TableCell padding="none">{product.product_name}</TableCell>

                  <TableCell className={classes.small}>
                    {Number(product.nutriments.energy) || 0}
                  </TableCell>

                  <TableCell className={classes.small}>
                    {(Number(product.nutriments.fat) || 0).toFixed(1)}
                  </TableCell>

                  <TableCell className={classes.small}>
                    {Number(product.nutriments.salt || 0).toFixed(1)}
                  </TableCell>

                  <TableCell className={classes.small}>
                    {Number(product.nutriments.carbohydrates || 0).toFixed(1)}
                  </TableCell>

                  <TableCell className={classes.small}>
                    {Number(product.nutriments.proteins || 0).toFixed(1)}
                  </TableCell>

                  <TableCell padding="checkbox">
                    <Button onClick={onSelect(key)}>Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={count}
            page={page - 1}
            rowsPerPage={20}
            rowsPerPageOptions={[20]}
            onChangePage={this.handleChangePage}
          />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  products: state.products.list,
  brand: state.products.brand,
  count: state.products.count,
  page: state.products.page
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePage: (brand, page) => dispatch(fetchProducts(brand, page))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductTable);
