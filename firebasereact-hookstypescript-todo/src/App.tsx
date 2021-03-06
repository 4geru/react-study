import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { db, auth } from './firebase';
import { FormControl, TextField, List, CircularProgress } from '@material-ui/core';
import AddToPhotoIcon from '@material-ui/icons/AddToPhotos';
import TaskItem from './TaskItem';
import { makeStyles } from '@material-ui/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import firebase from 'firebase/app';
import styled from 'styled-components';

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20
  },
  list: {
    margin: "auto",
    width: "40%"
  }
})

interface Task {
  id: string;
  title: string;
}

const CustomCircularProgress = styled(CircularProgress)`
  margin-top: 50px;
`

const App: React.FC = (props: any) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [uid, setUid] = useState<string | any | null>(null);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
        !user && props.histroy.push('/login');
        const uid = user?.uid;
        db.collection('users').doc(uid).collection('tasks').onSnapshot( snapshot => {
        const loadTasks = snapshot.docs.map( (doc) => {
          return {
            id: doc.id,
            title: doc.data().title
          }
        })
        setIsLoading(false)
        setUid(uid)
        setTasks(loadTasks)
      })
    })

    return () => {
      unSub();
    }
  }, []);

  const newTask = (e: React.MouseEvent) => {
    db.collection('users').doc(uid).collection('tasks').add({title: input});
    setInput('');
  }

  const logout = async () => {
    try {
      await auth.signOut();
      props.history.push('/login');
    } catch (error) {
      alert(error.message);
    }
  }
  
  return <div className={ styles.app__root }>
    <h1>Todo app by React/firebase</h1>
    <button
      className={styles.app__logout}
      onClick={logout}
    >
      <ExitToAppIcon />
    </button>
    <br />
    { isLoading ?
      <CustomCircularProgress
      size={ 100 }
      /> :
      <>
        <FormControl>
          <TextField
            className={classes.field}
            InputLabelProps={{
              shrink: true,
            }}
            label="New Task"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value) }
          />
        </FormControl>
        <button
            className={styles.app__icon}
            disabled={!input}
            onClick={newTask}
          >
            <AddToPhotoIcon />
          </button>
        <List
          className={classes.list}
        >
          {
            tasks.map((task, index) =>
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
              />
            )
          }
        </List>
      </>
    }
  </div>;
}

export default App;
