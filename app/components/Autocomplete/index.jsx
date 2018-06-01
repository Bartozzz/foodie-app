import * as React from "react";
import Downshift from "downshift";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from "@material-ui/core/styles";

const filter = (array, search, count = 10) =>
  array.filter(item => {
    const value = search.toLowerCase();
    const label = item.label.toLowerCase();

    return (!value || label.includes(value)) && count-- > 0;
  });

/**
 * Renders a simple text field with internal props from downshift library.
 *
 * @param        {Object}  props
 * @param        {Object}  rest
 * @constructor
 */
function DownshiftInput({props, ...rest}) {
  return <TextField InputProps={props} {...rest} />;
}

/**
 * Renders a single suggestion.
 *
 * @param        {Object}  props
 * @param        {Object}  suggestion
 * @param        {number}  index
 * @param        {number}  highlightedIndex
 * @constructor
 */
function DownshiftSuggestion({props, suggestion, index, highlightedIndex}) {
  const isSelected = highlightedIndex === index;

  return (
    <MenuItem {...props} selected={isSelected}>
      {suggestion.label}
    </MenuItem>
  );
}

/**
 * Renders a text field with suggestions.
 *
 * @param        {Object}   props
 * @param        {string}   props.value
 * @param        {Array}    props.values
 * @param        {Function} props.onChange
 * @constructor
 */
function DownshiftAutocomplete(props) {
  const {classes, value, values, onChange, ...rest} = props;
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
          <DownshiftInput {...rest} props={getInputProps({value})} />

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

export default withStyles(theme => ({
  container: {
    width: "100%"
  },

  // Default paper's styles, but different overflow
  paper: {
    position: "fixed",
    left: theme.spacing.unit,
    right: theme.spacing.unit,

    margin: theme.spacing.unit,
    padding: 0,

    maxHeight: 300,
    overflowX: "auto",
    overflowY: "auto",

    zIndex: 1
  }
}))(DownshiftAutocomplete);
