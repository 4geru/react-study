import React from 'react'
import styled from 'styled-components'
import { Button } from './components/button'

const Container = styled.div`
    padding: 12px 64px;
`

const Label = styled.div`
    display: flex;
    color:  #757575;
    font-size: 14px;
    font-weight: bold;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

const FormButton = styled(Button)`
    width: 120px;
`


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }
    submitForm (e) {
        e.preventDefault();
        this.props.onAddLang(this.state.text);
    }
    render() {
        const { text } = this.state
        return (
          <Container>
              <Label>新しい言語を追加</Label>
              <form onSubmit={(e) => this.submitForm(e)}>
                <Input
                    type="text"
                    value={text}
                    onChange={
                        (e) => {
                            this.setState({text: e.target.value})
                        }
                    }
                />
                <ButtonContainer>
                    <FormButton>submit</FormButton>
                </ButtonContainer>
              </form>
          </Container>
        )
      }
}