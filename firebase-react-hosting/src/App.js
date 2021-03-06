import './App.css';
import Container from 'muicss/lib/react/container';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider from './contexts/TodoContext';

const H1 = styled.h1`
  margin-top: 4px;
`

const App = () => {
  return (
    <div className="App">
      <Container>
        <H1>Todoリスト</H1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
