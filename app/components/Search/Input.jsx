// @flow
import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {fade} from "@material-ui/core/styles/colorManipulator";
import {withStyles} from "@material-ui/core/styles";

type ComponentProps = {
  value: string,
  classes: Object,
  searchRef: Object,
  onExpand: Function,
  onSearch: Function,
  onChange: Function
};

const styles = (theme: Object) => ({
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

  input: {
    display: "block",
    verticalAlign: "middle",

    width: 340,

    padding: `${theme.spacing.unit}px`,
    paddingLeft: `${theme.spacing.unit * 8}px`,

    font: "inherit",
    color: "inherit",
    border: "none",
    background: "none",

    transition: theme.transitions.create("width"),

    "&:focus": {
      outline: 0,
      width: 380
    },

    "&::placeholder": {
      color: "black",
      opacity: 0.5
    }
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
  }
});

class SearchInput extends React.Component<ComponentProps> {
  onKeyPress = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.props.onSearch();
    }
  };

  render() {
    const {classes, value, searchRef, onExpand, onChange} = this.props;

    return (
      <div className={classes.root} ref={searchRef}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <input
          value={value}
          placeholder="Brand, product or generic name…"
          className={classes.input}
          onChange={onChange}
          onKeyPress={this.onKeyPress}
        />

        <div className={classes.expandIcon} onClick={onExpand}>
          <ExpandMoreIcon />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchInput);
