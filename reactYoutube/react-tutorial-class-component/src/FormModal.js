import { Modal } from './components/modal';
import { Button } from './components/button';
import React from 'react';
import styled from 'styled-components';
import { ThemaContext } from './contexts/ThemaContext';

const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px 36px;
    background-color: white;
    height: 100px;
    color: ${({thema}) => thema.color};
    background-color: ${({thema}) => thema.backgroundColor};
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`

export class FormModal extends React.Component {

    render() {
        const { cancel, confirm } = this.props;
        return (
            <Modal>
                <ThemaContext.Consumer>
                    {
                        ([thema]) => (
                            <Container thema={thema}>
                                <div>
                                    本当に削除しますか？
                                </div>
                                <ButtonWrapper>
                                    <Button onClick={confirm}>yes</Button>
                                    <Button onClick={cancel}>no</Button>
                                </ButtonWrapper>
                            </Container>
                        )
                    }
                </ThemaContext.Consumer>
            </Modal>
        )
    }
}