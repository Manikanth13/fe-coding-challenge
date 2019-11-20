import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles, Divider, Typography, TextField, MenuItem } from '@material-ui/core';

import { ICar } from '../interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerText: {
      marginBottom: theme.spacing() * 1,
    },
  }),
);

interface IStatusProps {
  car: Partial<ICar>;
  onChange: (formValue: Partial<ICar>) => void;
}

const Status: React.FC<IStatusProps> = (props) => {
  const classes = useStyles(props);
  const { car, onChange } = props;

  return (
    <div>
      <Typography className={classes.headerText}>Status</Typography>
      <Divider />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          select
          label="Physical Status"
          value={car.physicalStatus || ''}
          onChange={(event) => onChange({ physicalStatus: event.target.value })}
          margin="dense"
          variant="outlined"
        >
          <MenuItem value="AT_OWNER">AT_OWNER</MenuItem>
          <MenuItem value="AT_BUYER">AT_BUYER</MenuItem>
          <MenuItem value="AT_OUR_LOCATION">AT_OUR_LOCATION</MenuItem>
        </TextField>

        <TextField
          select
          label="Legal Status"
          value={car.legalStatus || ''}
          onChange={(event) => onChange({ legalStatus: event.target.value })}
          margin="dense"
          variant="outlined"
        >
          <MenuItem value="OWNER">OWNER</MenuItem>
          <MenuItem value="US">US</MenuItem>
          <MenuItem value="BUYER">BUYER</MenuItem>
        </TextField>

        <TextField
          select
          label="Seller Status"
          value={car.sellingStatus || ''}
          onChange={(event) => onChange({ sellingStatus: event.target.value })}
          margin="dense"
          variant="outlined"
        >
          <MenuItem value="AVAILABLE">AVAILABLE</MenuItem>
          <MenuItem value="PENDING">PENDING</MenuItem>
          <MenuItem value="SOLD">SOLD</MenuItem>
          <MenuItem value="RESERVED">RESERVED</MenuItem>
        </TextField>
      </div>
    </div>
  );
}

export default Status;
