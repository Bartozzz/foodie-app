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

class Search extends React.Component {
  anchor = React.createRef();

  state = {
    isPopoverOpen: false,
    brand: "",
    product: "",
    country: ""
  };

  handleSearch = () => {
    // dispatch search
    console.log(this.state);

    this.props.search(this.state.brand);
  };

  handleChange = field => event => {
    // NOTE: We cannot prevent default behaviour here:
    // event.preventDefault();
    // event.stopPropagation();

    this.setState({
      [field]: event.target.value
    });
  };

  handlePopoverOpen = event => {
    this.setState({
      isPopoverOpen: true
    });
  };

  handlePopoverClose = event => {
    this.setState({
      isPopoverOpen: false
    });
  };

  render() {
    const {product, country} = this.state;

    return (
      <React.Fragment>
        <SearchInput
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

const mapStateToProps = state => ({
  // …
});

const mapDispatchToProps = dispatch => ({
  search: brand => dispatch(fetchProducts(brand))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
