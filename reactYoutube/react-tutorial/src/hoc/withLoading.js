import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import { ThemaContext } from '../context/ThemaContext';

const LoadDiv = styled.div`
    height: 100%;
    padding: 36px;
    color: ${({thema}) => thema.color};
    background-color: ${({thema}) => thema.backgroundColor};
`

export const withLoading = (WrapComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);
        const [thema] = useContext(ThemaContext);

        const Loading = (
            <LoadDiv thema={thema}>
                loading...
            </LoadDiv>
        )

        // initial loadの時のみ実行したい
        useEffect(() => {
            fetch()
        }, [])

        const fetch = async () => {
            const data = await fetchData();
            setData(data)
        }

        return data ? <WrapComponent data={data} /> : Loading;
    }
}