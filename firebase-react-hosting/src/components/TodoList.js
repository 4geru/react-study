import React from 'react'
import styled from 'styled-components';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const CustomCol = styled(Col)`
  padding-left: 15px;
  text-align: left;
`
const Done = styled.div`
  text-decoration-line: line-through;
`
function TodoList({todos, completeTodo, removeTodo}) {
    return (
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
    )
}

export default TodoList
