import React from 'react'
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import { useState, useContext } from 'react';
import { TodosContext } from '../contexts/TodoContext';

function TodoForm() {
    const { addTodo } = useContext(TodosContext);
    const [value, setValue] = useState('');
 
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Input01"
                floatingLabel={true}
                defaultValue=""
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <Button
                type="submit"
                color="primary"
            >
                追加
            </Button>
        </Form>
    )
}

export default TodoForm
