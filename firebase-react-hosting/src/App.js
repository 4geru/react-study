import './App.css';
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import styled from 'styled-components';
import { useState } from 'react';

const H1 = styled.h1`
  margin-top: 4px;
`

const CustomCol = styled(Col)`
  padding-left: 15px;
  text-align: left;
`
const Done = styled.div`
  text-decoration-line: line-through;
`

const App = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
  }

  const addTodo = text => {
    setTodos([...todos, { text, complete: false }])
    setValue('')
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
      </Container>
      <Container fluid={true}>
        {
          todos.map((todo, index) => {
            return (
              <Row key={index}>
                <CustomCol md="8" className="text-left">
                  {
                    todo.complete ?
                      <Done>{todo.text}</Done> :
                      <div>{todo.text}</div>
                  }
                </CustomCol>
                <Col md="2">
                  <Button color="danger" onClick={() => removeTodo(index)}>削除</Button>
                </Col>
                <Col md="2">
                  {
                    todo.complete ?
                      <Button color="dark" onClick={() => completeTodo(index)}>完了</Button> :
                      <Button color="raising" onClick={() => completeTodo(index)}>未完了</Button>
                  }
                </Col>
              </Row>
            )
          })
        }
      </Container>
    </div>
  );
}

export default App;
