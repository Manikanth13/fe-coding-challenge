import React, {  } from 'react';
import { View } from 'components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Button, TextField, MenuItem } from '@material-ui/core';
import { GET_MAKE, GET_MODEL, GET_TRIM } from 'graphql-client/query';
import LookupSelect from './lookup-select.component';
import { ICar } from '../interface';

interface IAddCardProps {
  car: Partial<ICar>;
  onChange: (formValue: Partial<ICar>) => void;
  onSubmit: () => void;
  submitting?: boolean;
}

const AddCard: React.FC<IAddCardProps> = (props) => {
  const classes = useStyles(props);

  return (
    <View className={classes.cardContainer}>
      <Typography variant="h6">A form to add information</Typography>
      <View className={classes.formContainer}>
        <LookupSelect
          query={GET_MAKE}
          variables={{}}
          dataTransform={(data) => data.make}
          value={props.car.make || ''}
          label="Make"
          onChange={(event) => props.onChange({ make: event.target.value === '-' ? '' : event.target.value })}
        />
        <LookupSelect
          query={GET_MODEL}
          variables={{ make: props.car.make }}
          dataTransform={(data) => data.model}
          value={props.car.model || ''}
          label="Model"
          onChange={(event) => props.onChange({ model: event.target.value === '-' ? '' : event.target.value })}
          disabled={!Boolean(props.car.make)}
        />
        <LookupSelect
          query={GET_TRIM}
          variables={{ make: props.car.make, model: props.car.model }}
          dataTransform={(data) => data.trim}
          value={props.car.trim || ''}
          label="Trim"
          onChange={(event) => props.onChange({ trim: event.target.value === '-' ? '' : event.target.value })}
          disabled={!Boolean(props.car.make) || !Boolean(props.car.model)}
        />
        <TextField
          select
          label="Engine type"
          value={props.car.engineType || ''}
          onChange={(event) => props.onChange({ engineType: event.target.value === '-' ? '' : event.target.value })}
          margin="dense"
          variant="outlined"
        >
          <MenuItem value="VEE">VEE</MenuItem>
          <MenuItem value="INLINE">INLINE</MenuItem>
          <MenuItem value="BOXER">BOXER</MenuItem>
          <MenuItem value="ROTARY">ROTARY</MenuItem>
        </TextField>
      </View>
      <Button disabled={props.submitting} color="secondary" variant="contained" className={classes.button} onClick={props.onSubmit}>Submit</Button>
    </View>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      minHeight: theme.spacing() * 50,
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing() * 2
    },
    formContainer: {
      width: theme.spacing() * 36
    },
    button: {
      width: theme.spacing() * 20,
    }
  }),
);
export default AddCard;