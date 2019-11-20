import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Divider, Typography } from '@material-ui/core';

import { green } from '@material-ui/core/colors';

import FinancialInfoRow, { IFincialInfoRowProps } from './financial-info-row.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      height: theme.spacing() * 25,
      display: 'flex',
      flex: 1,
    },
    headerText: {
      marginBottom: theme.spacing() * 1,
    },
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
    carContainer: {
      minHeight: theme.spacing() * 40,
      display: 'flex',
      justifyContent: 'center',
    },
    carModaltext: {
      textAlign: 'left',
    }
  }),
);

interface IFincialInfoProps {
  items: IFincialInfoRowProps[];
}

const FinancialInfo: React.FC<IFincialInfoProps> = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <Typography className={classes.headerText}>Financial Information</Typography>
      <Divider />
      {props.items.map((item, index) => (
        <FinancialInfoRow
          key={String(index)}
          {...item}
        />
      ))}
    </div>
  )
}

export default FinancialInfo;
