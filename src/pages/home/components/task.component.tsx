import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Checkbox, Fab, CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AssessmentRounded, Add } from '@material-ui/icons';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_TASK, IGetTaskResponse } from 'graphql-client/query';

import { View } from 'components';
import AddTask from './add-task.modal';
import { UPDATE_TAKS } from 'graphql-client/mutation';

const Task: React.FC = (props) => {
  const classes = useStyles(props);
  const [isOpen, setOpen] = useState(false);
  const [updateTask] = useMutation(UPDATE_TAKS);

  const { loading, error, data } = useQuery<IGetTaskResponse>(GET_TASK);
  const onSubmit = () => {
    setOpen(false);
  }

  if (loading) {
    return (
      <View className={classes.cardContainer}>
        <CircularProgress color="secondary" />
      </View>
    )
  }

  if (error) {
    return (
      <View className={classes.cardContainer}>
        <div>{error.message}</div>
      </View>
    )
  }
  return (
    <View className={classes.cardContainer}>
      <Typography variant="h6">A list of tasks</Typography>
      <List className={classes.taskList}>
        {data.tasks.map(({ comment, id, completed }) => {
          return (
            <ListItem key={id} button>
              <ListItemAvatar>
                <AssessmentRounded color="secondary" />
              </ListItemAvatar>
              <ListItemText primary={comment} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  checked={completed}
                  onClick={() => updateTask({ variables: { id, completed: !completed } })}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Fab color="secondary" className={classes.fabContainer} onClick={() => setOpen(true)}>
        <Add />
      </Fab>
      <AddTask isOpen={isOpen} onSubmit={onSubmit} />
    </View >
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      minHeight: theme.spacing() * 50,
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing() * 2,
      position: 'relative',
    },
    fabContainer: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    taskList: {
      maxHeight: theme.spacing() * 35,
      overflow: 'auto',
    }
  }),
);
export default Task;