// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import type {Product} from "../../types/off/Product";

type ComponentsProps = {
  classes: Object,
  product: Product
};

const hasAtLeastOneLabel = (nutriments = {}, labels, suffix) => {
  const search = labels.map(label => `${label}_${suffix}`);

  return Object.keys(nutriments).some(elem => {
    // $FlowFixMe
    return search.includes(elem) && nutriments[elem].length !== 0;
  });
};

const Etiquette = ({classes, product}: ComponentsProps) => {
  const {nutriments} = product;
  const labels = [
    "energy",
    "fat",
    "saturated",
    "carbohydrates",
    "sugars",
    "proteins",
    "salt",
    "sodium",
    "iron",
    "collagen-meat-protein-ratio"
  ];

  const displayPer100g = hasAtLeastOneLabel(nutriments, labels, "100g");
  const displayPerServing = hasAtLeastOneLabel(nutriments, labels, "serving");

  if (!nutriments || !displayPer100g) {
    return null;
  }

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nutrition facts</TableCell>
            <TableCell numeric>As sold for 100g / 100ml</TableCell>

            {/* Display 3rd column with nutriments per serving if avaiaible */}
            {displayPerServing && (
              <TableCell numeric>
                As sold per serving ({product.serving_size})
              </TableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {labels.map(
            label =>
              nutriments.hasOwnProperty(`${label}_100g`) && (
                <TableRow key={label}>
                  <TableCell>{label}</TableCell>
                  <TableCell numeric>
                    {nutriments[`${label}_100g`]}{" "}
                    {nutriments[`${label}_unit`] || "g"}
                  </TableCell>

                  {/* Display 3rd column with nutriments per serving if avaiaible */}
                  {displayPerServing && (
                    <TableCell numeric>
                      {nutriments[`${label}_serving`]}{" "}
                      {nutriments[`${label}_unit`] || "g"}
                    </TableCell>
                  )}
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles((theme: Object) => ({
  paper: {
    height: "100%",
    width: "100%"
  }
}))(Etiquette);
