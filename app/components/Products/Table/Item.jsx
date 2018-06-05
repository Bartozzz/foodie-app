// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import type {Product} from "../../../types/off/Product";

type ComponentProps = {
  index: number,
  classes: Object,
  product: Product,
  onSelect: Function
};

const normalize = (n: ?number | ?string = 0, p: number = 1) =>
  Number(n).toFixed(p);

const ProductItem = ({classes, product, index, onSelect}: ComponentProps) => {
  const {product_name, image_small_url, nutriments} = product;

  if (!product_name || !nutriments) {
    return null;
  }

  return (
    <TableRow hover>
      <TableCell padding="none">
        {image_small_url ? (
          <Avatar className={classes.avatar} src={image_small_url} />
        ) : (
          <Avatar className={classes.avatar}>{product_name.charAt(0)}</Avatar>
        )}
      </TableCell>

      <TableCell padding="none">{product_name}</TableCell>

      <TableCell className={classes.small}>
        {normalize(nutriments.energy, 0)} {nutriments.energy_unit || "kJ"}
      </TableCell>

      <TableCell className={classes.small}>
        {normalize(nutriments.fat)} {nutriments.fat_unit || "g"}
      </TableCell>

      <TableCell className={classes.small}>
        {normalize(nutriments.salt)} {nutriments.salt_unit || "g"}
      </TableCell>

      <TableCell className={classes.small}>
        {normalize(nutriments.carbohydrates)}{" "}
        {nutriments.carbohydrates_unit || "g"}
      </TableCell>

      <TableCell className={classes.small}>
        {normalize(nutriments.proteins)} {nutriments.proteins_unit || "g"}
      </TableCell>

      <TableCell padding="checkbox">
        <Button onClick={onSelect(index)}>Details</Button>
      </TableCell>
    </TableRow>
  );
};

export default withStyles((theme: Object) => ({
  small: {
    padding: `0 ${theme.spacing.unit * 2}px`,
    textAlign: "right"
  },

  avatar: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }
}))(ProductItem);
