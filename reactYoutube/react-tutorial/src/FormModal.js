import { Modal } from './components/modal';
import { Button } from './components/button';
import styled from 'styled-components';

const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px 36px;
    background-color: white;
    height: 100px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`


export const FormModal = ({confirm, cancel}) => {
    return (
        <Modal>
            <Container>
                本当に作成しますか？
                <ButtonWrapper>
                    <Button onClick={cancel}>Cancel</Button>
                    <Button onClick={confirm}>OK</Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
}