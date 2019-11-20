import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TextField, MenuItem } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';
import { DocumentNode } from 'graphql';

type IModelSelectProps = TextFieldProps & {
  // make: string;
  query: DocumentNode;
  variables: any;
  dataTransform: (data: any) => string[];
}

const LookupSelect: React.FC<IModelSelectProps> = (props) => {
  const { loading, error, data } = useQuery(props.query, { variables: props.variables });

  let options = [];

  if (!loading && !error) {
    options = props.dataTransform(data);
  }

  return (
    <TextField
      select
      label={props.label}
      value={props.value || '-'}
      onChange={props.onChange}
      margin="dense"
      variant="outlined"
      disabled={props.disabled}
    >
      <MenuItem value="-">Select</MenuItem>
      {options.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
    </TextField>
  );
}

export default LookupSelect;
