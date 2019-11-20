import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { View } from 'components';

import FinancialInfo from './financial-info/financial-info.component';
import Status from './status.component';
import { ICar, IFinancialDetail } from '../interface';


interface IProps {
  car: Partial<ICar>;
  onChange: (formValue: Partial<ICar>) => void;
  financialDetails: IFinancialDetail;
}

const CarDetail: React.FC<IProps> = (props) => {
  const classes = useStyles(props);

  const { car, financialDetails } = props;

  return (
    <View className={classes.carContainer}>
      <Typography variant="h6" className={classes.carModaltext}>{car.model}</Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={3}>
          <img src="images/car.png" className={classes.imageContainer} alt="carImage" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Status
            car={props.car}
            onChange={props.onChange}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FinancialInfo
            items={[{
              title: 'Purchased',
              amount: financialDetails.purchasePrice,
              date: new Date(financialDetails.paymentDonePercentage),
              rate: financialDetails.margin,
              label: 'payments to buyer done',
              location: financialDetails.purchaseLocation
            }, {
              title: 'Sold',
              amount: financialDetails.sellingPrice,
              date: new Date(financialDetails.sellingDate),
              rate: financialDetails.sellingDonePercentage,
              label: 'payments from seller done',
              location: financialDetails.sellingLocation,
              growth: financialDetails.margin
            }]}
          />
        </Grid>
      </Grid>
    </View>
  )
}
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
export default CarDetail;