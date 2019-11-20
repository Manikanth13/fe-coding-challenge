import React, { useState } from 'react';
import { Modal, Typography, Button, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';

import { View, Select } from 'components';
import { CREATE_TASK } from 'graphql-client/mutation';
import { GET_TASK } from 'graphql-client/query';

interface IProps {
  isOpen: boolean;
  onSubmit: Function;
}

const AddTask: React.FC<IProps> = (props) => {
  const classes = useStyles(props);
  const [createTask] = useMutation(CREATE_TASK, { refetchQueries: () => [{ query: GET_TASK }] });
  const [value, setValue] = useState('');
  const [currentTaskType, setTaskType] = useState('ADD_DOCUMENT');
  const { isOpen, onSubmit } = props;

  const handleSubmit = async () => {
    await createTask({ variables: { carId: 'e2de24e6-a7db-431e-8230-4ea5638cd19b', taskType: currentTaskType, comment: value } });
    onSubmit(value);
    setValue('');
  }
  return (
    <Modal open={isOpen} className={classes.modalContainer}>
      <View className={classes.modalDataContainer}>
        <Typography variant="h6">Add task</Typography>
        <Select label="Type" options={['ADD_DOCUMENT', 'WASH_CAR', 'ADD_PAYMENT_DETAILS'].map(x => ({ label: x, value: x }))} onChange={(event) => setTaskType(event.target.value)} />
        <TextField placeholder="Enter Comment" variant="outlined" margin="dense" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button variant="contained" color="secondary" className={classes.button} onClick={handleSubmit}>Add</Button>
      </View>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    modalDataContainer: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing() * 2,
      minWidth: theme.spacing() * 50,
      minHeight: theme.spacing() * 30,
    },
    button: {
      marginTop: theme.spacing() * 2
    },
  }),
);
export default AddTask;