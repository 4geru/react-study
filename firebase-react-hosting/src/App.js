import './App.css';
import Container from 'muicss/lib/react/container';
import styled from 'styled-components';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const H1 = styled.h1`
  margin-top: 4px;
`

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { text, complete: false }])
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <Container>
        <H1>Todoリスト</H1>
        <TodoForm addTodo={addTodo} />
      </Container>
      <TodoList
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
