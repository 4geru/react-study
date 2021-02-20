import { Modal } from './components/modal';
import { Button } from './components/button';
import styled from 'styled-components';
import { ThemaContext, THEMAS } from './context/ThemaContext';
import { useContext } from 'react';

const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px 36px;
    background-color: white;
    height: 100px;
    color: ${({thema}) => thema.color};
    background-color: ${({thema}) => thema.backgroundColor};
    border: ${({thema}) => thema === THEMAS.dark ? '2px solid white' : 'none' }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`


export const FormModal = ({confirm, cancel}) => {
    const [thema] = useContext(ThemaContext);
    return (
        <Modal>
            <Container thema={thema}>
                本当に作成しますか？
                <ButtonWrapper>
                    <Button onClick={cancel}>Cancel</Button>
                    <Button onClick={confirm}>OK</Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
}
