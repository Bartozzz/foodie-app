import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {fade} from "@material-ui/core/styles/colorManipulator";
import {withStyles} from "@material-ui/core/styles";
import SearchSelect from "../SearchSelect";
import countryLabels from "../../constants/countries";

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    position: "relative",

    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,

    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),

    "&:hover": {
      background: fade(theme.palette.common.white, 0.25)
    }
  },

  rootExpanded: {
    background: theme.palette.common.white,
    borderRadius: "2px 2px 0 0"
  },

  input: {
    display: "block",
    verticalAlign: "middle",

    width: 300,

    padding: `${theme.spacing.unit}px`,
    paddingLeft: `${theme.spacing.unit * 8}px`,

    font: "inherit",
    color: "inherit",
    border: "none",
    background: "none",

    transition: theme.transitions.create("width"),

    "&:focus": {
      outline: 0,
      width: 350
    },

    "&::placeholder": {
      color: "black",
      opacity: 0.5
    }
  },

  buttons: {
    display: "flex",
    alignItems: "end",
    justifyContent: "flex-end"
  },

  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },

  searchIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: theme.spacing.unit * 9,
    height: "100%",

    pointerEvents: "none"
  },

  expandIcon: {
    position: "absolute",
    right: 0,
    top: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: theme.spacing.unit * 5,
    height: "100%",

    cursor: "pointer"
  },

  expandPaper: {
    position: "absolute",
    marginTop: theme.spacing.unit,

    minWidth: theme.spacing.unit * 2,
    maxWidth: `calc(100% - ${theme.spacing.unit * 4}px)`,

    minHeight: theme.spacing.unit * 2,
    maxHeight: `calc(100% - ${theme.spacing.unit * 4}px)`,

    // Required by select autocomplete
    overflowX: "initial",
    overflowY: "initial",

    outline: "none"
  },

  expandContent: {
    width: 300
  }
});

class SearchInput extends React.Component {
  search = React.createRef();
  input = React.createRef();

  state = {
    isOpen: false
  };

  updateFilter = filter => event => {
    console.log(filter, event.target.value);
  };

  handleClick = event => {
    this.setState({
      isOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const {isOpen} = this.state;
    const {classes} = this.props;

    return (
      <React.Fragment>
        <div className={classes.root} ref={this.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

          <input
            ref={this.input}
            className={classes.input}
            placeholder="Product name…"
          />

          <div className={classes.expandIcon} onClick={this.handleClick}>
            <ExpandMoreIcon />
          </div>
        </div>

        <Popover
          open={isOpen}
          anchorEl={this.search.current}
          onClose={this.handleClose}
          PaperProps={{className: classes.expandPaper}}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <div className={classes.expandContent}>
            <List
              subheader={<ListSubheader>Filter search</ListSubheader>}
              dense
            >
              <ListItem>
                <SearchSelect
                  label="County"
                  margin="dense"
                  values={countryLabels}
                  onChange={this.updateFilter("country")}
                  fullWidth
                />
              </ListItem>

              <ListItem>
                <TextField
                  label="Brand"
                  margin="dense"
                  onChange={this.updateFilter("brand")}
                  fullWidth
                />
              </ListItem>

              <ListItem className={classes.buttons}>
                <Button className={classes.button}>Reset</Button>

                <Button
                  className={classes.button}
                  variant="raised"
                  color="primary"
                >
                  Search
                </Button>
              </ListItem>
            </List>
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SearchInput);
