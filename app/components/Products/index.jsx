// @flow
import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ProductList from "./List";
import ProductTable from "./Table";
import ViewModes from "../../constants/viewmodes";
import type {Product} from "../../types/off/Product";

type ComponentProps = {
  classes: Object,
  products: Array<Product>,
  brand: string,
  count: number,
  page: number,
  onChangePage: Function,
  onSelect: Function
};

type ComponentState = {
  mode: string
};

class Products extends React.Component<ComponentProps, ComponentState> {
  state = {
    mode: ViewModes.VIEW_TABLE
  };

  changeMode = (mode: string) => (event: Object) => {
    this.setState({
      mode
    });
  };

  renderMode(mode: string) {
    const {onSelect, onChangePage, page, count, brand, products} = this.props;
    const props = {onSelect, onChangePage, page, count, brand, products};

    switch (mode) {
      case ViewModes.VIEW_LIST:
        return <ProductList {...props} />;
      default:
        return <ProductTable {...props} />;
    }
  }

  render() {
    const {classes, count} = this.props;
    const {mode} = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="subheading" color="inherit">
              Found {count} results.
            </Typography>

            <div className={classes.grow} />

            <IconButton onClick={this.changeMode(ViewModes.VIEW_TABLE)}>
              <ViewListIcon />
            </IconButton>

            <IconButton onClick={this.changeMode(ViewModes.VIEW_LIST)}>
              <ViewModuleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className={classes.content}>{this.renderMode(mode)}</div>
      </div>
    );
  }
}

export default withStyles((theme: Object) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    height: "100%"
  },

  grow: {
    flex: "1"
  },

  content: {
    flex: "1",

    overflowX: "hidden",
    overflowY: "auto"
  }
}))(Products);
