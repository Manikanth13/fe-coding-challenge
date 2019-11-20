import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Grid, createStyles, Theme, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { View } from 'components';

import CarDetails from './components/car-detail.component';
import AddCard from './components/add-card.component';
import Task from './components/task.component';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { IGetCarResponse, GET_CAR } from 'graphql-client/query';
import { UPDATE_CAR } from 'graphql-client/mutation';
import { ICar } from './interface';

const CAR_ID = 'e2de24e6-a7db-431e-8230-4ea5638cd19b';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing() * 3,
    },
    formContainer: {
      marginTop: theme.spacing() * 2,
      marginBottom: theme.spacing() * 2,
    },
  }),
);

const HomePage: React.FC = (props) => {
  const classes = useStyles(props);
  const getCar = useQuery<IGetCarResponse>(GET_CAR);
  const [carDetail, setCarDetail] = useState<Partial<ICar>>({});
  const [updateCar] = useMutation(UPDATE_CAR);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!getCar.loading && !getCar.error) {
      const car = getCar.data.car;
      setCarDetail({
        legalStatus: car.legalStatus,
        physicalStatus: car.physicalStatus,
        sellingStatus: car.sellingStatus,
        engineType: car.engineType,
        id: car.id,
        make: car.make,
        model: car.model,
        trim: car.trim,
      });
    }
  }, [getCar])

  const handleChange = async (car: Partial<ICar>) => {
    setCarDetail({
      ...carDetail,
      ...car,
    });
  }

  const handleSubmit = async () => {
    setUpdating(true);
    try {
      await updateCar({
        variables: {
          carId: CAR_ID,
          ...carDetail,
        }
      })
      setUpdating(false);
    } catch {
      setUpdating(false);
    }
  }

  if (getCar.loading) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  if (getCar.error) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>{getCar.error.message}</div>
      </div>
    )
  }

  const { car } = getCar.data;

  return (
    <View>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <View className={classes.container}>
        <CarDetails car={carDetail} onChange={handleChange} financialDetails={car.financialDetails} />
        <Grid container spacing={5} className={classes.formContainer}>
          <Grid item sm={12} md={6}>
            <AddCard car={carDetail} onChange={handleChange} onSubmit={handleSubmit} submitting={updating} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Task />
          </Grid>
        </Grid>
      </View>
    </View>
  );
}

export default HomePage;
