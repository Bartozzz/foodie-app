// @flow
import * as React from "react";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";
import SearchInput from "./Input";
import Autocomplete from "../Autocomplete";
import SearchPopover from "./Popover";
import countries from "../../constants/countries";
import {fetchProducts} from "../../actions/products";
import type {Dispatch} from "../../types/Store";
import type {State} from "../../types/State";

type ComponentProps = {
  search: string => void,
  onSearch: Function
};

type ComponentState = {
  isPopoverOpen: boolean,
  brand: string,
  product: string,
  country: string
};

class Search extends React.Component<ComponentProps, ComponentState> {
  anchor = React.createRef();

  state = {
    isPopoverOpen: false,
    brand: "",
    product: "",
    country: ""
  };

  handleSearch = () => {
    this.props.search(this.state.brand);
    this.props.onSearch();
  };

  handleChange = field => (event: Object) => {
    // NOTE: We cannot prevent default behaviour here:
    // event.preventDefault();
    // event.stopPropagation();

    this.setState({
      [field]: event.target.value
    });
  };

  handlePopoverOpen = () => {
    this.setState({
      isPopoverOpen: true
    });
  };

  handlePopoverClose = () => {
    this.setState({
      isPopoverOpen: false
    });
  };

  render() {
    const {brand, product, country} = this.state;

    return (
      <React.Fragment>
        <SearchInput
          value={brand}
          searchRef={this.anchor}
          onSearch={this.handleSearch}
          onChange={this.handleChange("brand")}
          onExpand={this.handlePopoverOpen}
        />

        <SearchPopover
          anchor={this.anchor}
          isOpen={this.state.isPopoverOpen}
          onClose={this.handlePopoverClose}
          onSearch={this.handleSearch}
        >
          <List subheader={<ListSubheader>Filter search</ListSubheader>} dense>
            <ListItem>
              <Autocomplete
                label="County"
                value={country}
                values={countries}
                onChange={this.handleChange("country")}
                margin="dense"
                fullWidth
              />
            </ListItem>

            <ListItem>
              <TextField
                label="Product"
                value={product}
                onChange={this.handleChange("product")}
                margin="dense"
                fullWidth
              />
            </ListItem>
          </List>
        </SearchPopover>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({
  // …
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  search: (brand: string) => dispatch(fetchProducts(brand))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
