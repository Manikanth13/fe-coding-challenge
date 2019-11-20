import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';
import { View } from 'components';

import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    financialInfoContainer: {
      marginTop: theme.spacing() * 1,
      marginBottom: theme.spacing() * 2,
    },
    amountContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing() * 0.5,
      marginBottom: theme.spacing() * 0.5,
    },
    growthText: {
      color: green[500],
    },
  }),
);

export interface IFincialInfoRowProps {
  title: string;
  amount: number;
  rate: number;
  date: Date;
  location: string;
  label: string;
  growth?: number;
}

const FincialInfoRow: React.FC<IFincialInfoRowProps> = (props) => {
  const { title, amount, rate, date, location, label, growth } = props;

  const classes = useStyles(props);

  return (
    <View className={classes.financialInfoContainer}>
      <Typography variant="caption" color="textSecondary">{title}</Typography>
      <View className={classes.amountContainer}>
        <Typography variant="body2">${amount.toLocaleString()}</Typography>
        {growth && <Typography variant="subtitle2" className={classes.growthText}>+{growth}%</Typography>}
        <Typography variant="caption" color="textSecondary">({date.toLocaleDateString()},{location})</Typography>
      </View>
      <Typography variant="caption" color="textSecondary">{rate}% {label}</Typography>
    </View>
  )
}

export default FincialInfoRow;
