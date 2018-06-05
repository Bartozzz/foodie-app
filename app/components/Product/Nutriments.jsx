// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Error from "../Error";
import type {Product} from "../../types/off/Product";

type ComponentsProps = {
  classes: Object,
  product: Product
};

const Nutriments = ({classes, product}: ComponentsProps) => {
  const {
    nutriments,
    nutrient_levels,
    nutrition_grades,
    nutrition_data_per
  } = product;

  if (!nutriments || !nutrient_levels || !Object.keys(nutrient_levels).length) {
    return (
      <Paper className={classes.paper}>
        <Error message="No nutriments data for this product!" />
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      {nutrition_grades && (
        <img
          className={classes.nutriscore}
          src={`https://static.openfoodfacts.org/images/misc/nutriscore-${nutrition_grades}.svg`}
        />
      )}

      <Table>
        <TableBody>
          {Object.keys(nutrient_levels).map(nutrient => (
            <TableRow key={nutrient}>
              <TableCell padding="none" className={classes.misc}>
                {nutrient_levels[nutrient] === "high" && (
                  <Avatar className={classes.avatarHigh}>H</Avatar>
                )}

                {nutrient_levels[nutrient] === "moderate" && (
                  <Avatar className={classes.avatarModerate}>M</Avatar>
                )}

                {nutrient_levels[nutrient] === "low" && (
                  <Avatar className={classes.avatarLow}>L</Avatar>
                )}
              </TableCell>

              <TableCell padding="none">
                {nutrient} in {nutrient_levels[nutrient]} level
              </TableCell>

              <TableCell numeric>
                {nutriments[nutrient]}g / {nutrition_data_per}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles((theme: Object) => ({
  paper: {
    height: "100%"
  },

  avatarHigh: {
    color: "#f29581",
    backgroundColor: "#e73f12"
  },

  avatarModerate: {
    color: "#ffe285",
    backgroundColor: "#fecb03"
  },

  avatarLow: {
    color: "#bcd98e",
    backgroundColor: "#84bb31"
  },

  misc: {
    padding: theme.spacing.unit
  },

  nutriscore: {
    display: "block",

    margin: "0 auto",
    padding: theme.spacing.unit
  }
}))(Nutriments);
