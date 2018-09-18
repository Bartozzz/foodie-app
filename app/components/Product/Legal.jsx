// @flow
import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Legal = () => (
  <Card>
    <CardContent>
      <Typography color="textSecondary">
        The Open Food Facts database is available under the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://opendatacommons.org/licenses/odbl/1.0/"
        >
          Open Database License
        </a>.
      </Typography>

      <Typography color="textSecondary">
        Individual contents of the database are available under the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://opendatacommons.org/licenses/dbcl/1.0/"
        >
          Database Contents License
        </a>.
      </Typography>

      <Typography color="textSecondary">
        The product photos are available under the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
        >
          Creative Commons Attribution ShareAlike Licence
        </a>.
      </Typography>
    </CardContent>
  </Card>
);

export default Legal;
