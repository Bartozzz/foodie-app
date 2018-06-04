// @flow
import * as React from "react";
import {connect} from "react-redux";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

type Props = {
  id: number,
  classes: Object,
  product: Object
};

class Product extends React.Component<Props> {
  render() {
    const {product, classes, id} = this.props;

    console.log(product);

    return (
      <Grid container spacing={16} className={classes.root}>
        <Grid item xs={6}>
          <Paper className={classes.main}>
            <img src={product.image_url} className={classes.photo} />

            <Typography
              variant="headline"
              component="h1"
              className={classes.name}
            >
              {product.product_name}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Quantity:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.quantity}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Packaging:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.packaging.split(",").join(", ")}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Brands:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.brands.split(",").join(", ")}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Categories:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.categories.split(",").join(", ")}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Stores:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.stores.split(",").join(", ")}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Sold in:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.purchase_places.split(",").join(", ")}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row" className={classes.th}>
                    Labels, certifications:
                  </TableCell>

                  <TableCell className={classes.td} numeric>
                    {product.labels.split(",").join(", ")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper style={{height: "100%"}}>
            <Typography variant="headline" component="h2">
              Ingredients
            </Typography>

            <Typography variant="headline">
              {product.ingredients.map(i => i.text).join(", ")}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper>
            <img
              className={classes.nutriscore}
              src={`https://static.openfoodfacts.org/images/misc/nutriscore-${
                product.nutrition_grades
              }.svg`}
            />

            <Table>
              <TableBody>
                {Object.keys(product.nutrient_levels).map(nutrient => (
                  <TableRow key={nutrient}>
                    <TableCell padding="none" className={classes.misc}>
                      <img
                        src={`https://static.openfoodfacts.org/images/misc/${
                          product.nutrient_levels[nutrient]
                        }.svg`}
                      />
                    </TableCell>

                    <TableCell padding="none">
                      {nutrient} in {product.nutrient_levels[nutrient]} level
                    </TableCell>

                    <TableCell numeric>
                      {product.nutriments[nutrient]}g /{" "}
                      {product.nutrition_data_per}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nutrition facts</TableCell>
                    <TableCell numeric>As sold for 100 g / 100 ml</TableCell>
                    <TableCell numeric>As sold per serving (80 g)</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>Energy</TableCell>
                    <TableCell numeric>
                      {product.nutriments.energy_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.energy_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Fat</TableCell>
                    <TableCell numeric>{product.nutriments.fat_100g}</TableCell>
                    <TableCell numeric>
                      {product.nutriments.fat_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Saturated fat</TableCell>
                    <TableCell numeric>
                      {product.nutriments["saturated-fat_100g"]}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments["saturated-fat_serving"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Carbohydrate</TableCell>
                    <TableCell numeric>
                      {product.nutriments.carbohydrates_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.carbohydrates_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Sugars</TableCell>
                    <TableCell numeric>
                      {product.nutriments.sugars_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.sugars_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Proteins</TableCell>
                    <TableCell numeric>
                      {product.nutriments.proteins_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.proteins_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Salt</TableCell>
                    <TableCell numeric>
                      {product.nutriments.salt_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.salt_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Sodium</TableCell>
                    <TableCell numeric>
                      {product.nutriments.sodium_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.sodium_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Iron</TableCell>
                    <TableCell numeric>
                      {product.nutriments.iron_100g}
                    </TableCell>
                    <TableCell numeric>
                      {product.nutriments.iron_serving}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Collagen/Meat protein ratio</TableCell>
                    <TableCell numeric>
                      {product.nutriments["collagen-meat-protein-ratio_100g"]}
                    </TableCell>
                    <TableCell numeric>
                      {
                        product.nutriments[
                          "collagen-meat-protein-ratio_serving"
                        ]
                      }
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state: Object) => ({
  product: state.product.data
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // …
});

export default compose(
  withStyles((theme: Object) => ({
    root: {
      margin: "0 auto",
      padding: theme.spacing.unit * 2,

      width: "100%",
      maxWidth: 1000
    },

    main: {
      position: "relative",

      backgroundColor: "black"
    },

    photo: {
      display: "block",

      padding: 0,
      margin: "0 auto",

      height: "337px",
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
    },

    misc: {
      padding: theme.spacing.unit
    },

    nutriscore: {
      display: "block",

      margin: "0 auto",
      padding: theme.spacing.unit
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
  })),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Product);
