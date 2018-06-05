// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type ComponentProps = {
  classes: Object,
  message: string,
  image?: string
};

const Error = ({classes, message, image}: ComponentProps) => (
  <div className={classes.root}>
    <div className={classes.container}>
      {image && <img src={image} className={classes.image} />}

      <Typography color="textSecondary" variant="subheading">
        {message}
      </Typography>
    </div>
  </div>
);

export default withStyles((theme: Object) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "100%"
  },

  container: {
    textAlign: "center"
  },

  image: {
    marginBottom: theme.spacing.unit * 2,

    width: 170
  }
}))(Error);
