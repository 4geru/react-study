import { useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
    padding: 12px 64px;
`

const ListItem = styled.div`
    padding: 8px 16px;

    &.nth-child(n+2) {
        border-top: 1px solid #D9D8DE;
    }
`


export const List = ({ languages }) => {
    useEffect(() => {
        console.log('List.js:useEffect')
        return () => {
            console.log('List.js:useEffectUnmonting')
        }
    })

    return (
        <Container>
            {
                languages.map((lang, index) => {
                    return <ListItem key={index}>
                        { lang }
                    </ListItem>
                })
            }
        </Container>
    )
}