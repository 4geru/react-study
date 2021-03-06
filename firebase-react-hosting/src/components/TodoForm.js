import React from 'react'
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import { useState } from 'react';

function TodoForm({addTodo}) {
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
