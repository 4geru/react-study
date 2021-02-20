import React from 'react'
import styled from 'styled-components';
import { ThemaContext } from '../contexts/ThemaContext'
const LoadDiv = styled.div`
    height: 100%;
    padding: 36px;
    color: ${({thema}) => thema.color};
    background-color: ${({thema}) => thema.backgroundColor};
`
export const withLoading = (WrappedConponent, fetchData) => {
    class HOC extends React.Component {
        static contextType = ThemaContext;

        constructor(props) {
            super(props);
            this.state = { data: null }
        }
        componentDidMount() {
            this.fetch();
        }
        async fetch() {
            const data = await fetchData();
            this.setState({data})
        }
        render() {
            const { data } = this.state;
            const [thema] = this.context;

            const Loading = (
                <LoadDiv thema={thema}>loading...</LoadDiv>
            )

            return data ? <WrappedConponent data={ data } /> : Loading
        }
    }

    return HOC;
}