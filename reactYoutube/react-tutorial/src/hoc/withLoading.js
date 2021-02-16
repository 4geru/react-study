import { useEffect, useState } from 'react'
import styled from 'styled-components';

const LoadDiv = styled.div`
    padding: 36px;
`

export const withLoading = (WrapComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);

        const Loading = (
            <LoadDiv>
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