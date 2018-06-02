// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DietImage from "../../images/diet.svg";

type Props = {
  classes: Object
};

class HomePage extends React.Component<Props> {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <img src={DietImage} className={classes.image} />

          <Typography align="center" color="textSecondary" variant="subheading">
            Start searching food by using the search bar at the top.
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles((theme: Object) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "100%"
  },

  container: {
    width: 250,
    height: 300
  },

  image: {
    marginBottom: theme.spacing.unit * 2
  }
}))(HomePage);
