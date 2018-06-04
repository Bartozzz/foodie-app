// @flow
import * as React from "react";
import Downshift from "downshift";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {withStyles} from "@material-ui/core/styles";

type Suggestion = {
  label: string,
  value?: string | number
};

/**
 * Filters n first suggestions matching the search criterium.
 *
 * @param   {Array<Suggestion>} array
 * @param   {string}            search
 * @param   {number}            count
 * @return  {Array<Suggestion>}
 */
function filter(array: Array<Suggestion>, search: string, n: number = 10): * {
  return array.filter((item: Suggestion) => {
    const value: string = search.toLowerCase();
    const label: string = item.label.toLowerCase();

    return (!value || label.includes(value)) && n-- > 0;
  });
}

/**
 * Renders a simple text field with internal props from downshift library.
 *
 * @param       {Object}  props
 * @param       {Object}  props.props
 * @param       {Object}  props.rest
 * @constructor
 */
function DownshiftInput({props, ...rest}: Object): * {
  return <TextField InputProps={props} {...rest} />;
}

/**
 * Renders a single suggestion.
 *
 * @param       {Object}      props
 * @param       {Object}      props.props
 * @param       {Suggestion}  props.suggestion
 * @param       {?number}     props.index
 * @param       {?number}     props.highlightedIndex
 * @constructor
 */
function DownshiftSuggestion(props: {
  props: Object,
  suggestion: Suggestion,
  index: ?number,
  highlightedIndex: ?number
}): * {
  const isSelected = props.highlightedIndex === props.index;

  return (
    <MenuItem {...props.props} selected={isSelected}>
      {props.suggestion.label}
    </MenuItem>
  );
}

/**
 * Renders a text field with suggestions.
 *
 * @param       {Object}    props
 * @param       {Object}    props.classes
 * @param       {string}    props.value
 * @param       {Array}     props.values
 * @param       {Function}  props.onChange
 * @constructor
 */
function DownshiftAutocomplete(props: {
  classes: Object,
  value: string,
  values: Array<Suggestion>,
  onChange: Object => void
}): * {
  const {classes, value, values, onChange, ...rest} = props;

  const imitateEvent: * = (value: string) => ({target: {value}});
  const handleChange: * = (value: string) => onChange(imitateEvent(value));

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
              {filter(values, inputValue).map((suggestion, index) => (
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

export default withStyles((theme: Object) => ({
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
