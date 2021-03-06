import React, { useState, useEffect, useContext } from 'react'
import firebase from 'firebase/app';
import { ListItem, TextField, Grid } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { db, auth } from './firebase';
import styled from 'styled-components';
import { UserContext } from './contexts/UserContext';

interface PROPS {
    id: string;
    title: string;
}

const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 2px;
    color: dimgray;
`
const TaskItem: React.FC<PROPS> = (props) => {
    const [title, setTitle] = useState(props.title);
    const { uid } = useContext(UserContext);

    const editTask = () => {
        db.collection('users').doc(uid).collection('tasks').doc(props.id).set({title: title}, { merge: true })
    }

    const deleteTask = () => {
        db.collection('users').doc(uid).collection('tasks').doc(props.id).delete()
    }
    return (
        <ListItem>
            <h2>{ props.title }</h2>
            <Grid
                container
                justify="flex-end"
            >
                <TextField
                    label="Edit Task"
                    value={title}                
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.target.value);
                    }}
                />
            </Grid>
            <Button onClick={editTask}>
                <EditOutlinedIcon />
            </Button>
            <Button onClick={deleteTask}>
                <DeleteOutlineOutlinedIcon />
            </Button>
        </ListItem>
    )
}

export default TaskItem
