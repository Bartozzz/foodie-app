import * as React from "react";
import Downshift from "downshift";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";

function DownshiftInput({props, ...rest}) {
  return <TextField InputProps={props} {...rest} />;
}

function DownshiftSuggestion({props, suggestion, index, highlightedIndex}) {
  const isSelected = highlightedIndex === index;

  return (
    <MenuItem {...props} key={suggestion.label} selected={isSelected}>
      {suggestion.label}
    </MenuItem>
  );
}

function filter(array, search) {
  return array.filter(item => {
    const value = search.toLowerCase();
    const label = item.label.toLowerCase();

    return !value || label.includes(value);
  });
}

const styles = theme => ({
  container: {
    width: "100%"
  },

  paper: {
    position: "fixed",
    left: theme.spacing.unit,
    right: theme.spacing.unit,

    margin: theme.spacing.unit,
    padding: 0,

    maxHeight: 300,
    overflowX: "hidden",
    overflowY: "auto",

    zIndex: 1
  }
});

function DownshiftSelect(props) {
  const {classes, values, onChange, ...rest} = props;
  const suggestions = values || [];

  const imitateEvent = value => ({target: {value}});
  const handleChange = value => onChange(imitateEvent(value));

  return (
    <Downshift onInputValueChange={handleChange}>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex
      }) => (
        <div className={classes.container}>
          <DownshiftInput {...rest} props={getInputProps()} />

          {isOpen && (
            <Paper className={classes.paper} component="ul">
              {filter(suggestions, inputValue).map((suggestion, index) => (
                <DownshiftSuggestion
                  key={index}
                  index={index}
                  suggestion={suggestion}
                  props={getItemProps({item: suggestion.label})}
                  highlightedIndex={highlightedIndex}
                />
              ))}
            </Paper>
          )}
        </div>
      )}
    </Downshift>
  );
}

export default withStyles(styles)(DownshiftSelect);
