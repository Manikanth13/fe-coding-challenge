import React, {  } from 'react';
import { TextField, MenuItem } from '@material-ui/core';

import { InputProps } from '@material-ui/core/Input';

interface ILookup<T = string> {
  label: string;
  value: T;
}

export interface ISelectProps {
  label: string;
  onChange?: InputProps['onChange'];
  options: ILookup[];
  disabled?: boolean;
  value?: string;
}

const Select: React.FC<ISelectProps> = (props) => {
  const { label, options, disabled } = props;

  return (
    <TextField
      select
      label={label}
      value={props.value}
      onChange={props.onChange}
      margin="dense"
      variant="outlined"
      disabled={disabled ? disabled : false}
    >
      {options.map((item) => (
        <MenuItem key={String(item.value)} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default Select;