// @flow
import * as React from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";

type ComponentProps = {
  anchor: Object,
  classes: Object,
  isOpen: boolean,
  onClose: Function,
  onSearch: Function,
  children: React.Node
};

const styles = (theme: Object) => ({
  buttons: {
    display: "flex",
    alignItems: "end",
    justifyContent: "flex-end",
    margin: theme.spacing.unit
  },

  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit
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

class SearchPopover extends React.Component<ComponentProps> {
  render() {
    const {isOpen, onClose, onSearch, anchor, classes} = this.props;

    return (
      <Popover
        open={isOpen}
        anchorEl={anchor.current}
        onClose={onClose}
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
          {this.props.children}

          <div className={classes.buttons}>
            <Button
              className={classes.button}
              onClick={onSearch}
              variant="raised"
              color="primary"
            >
              Search
            </Button>
          </div>
        </div>
      </Popover>
    );
  }
}

export default withStyles(styles)(SearchPopover);
