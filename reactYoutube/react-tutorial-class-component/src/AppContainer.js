import React from 'react'
import { ThemaContext } from './contexts/ThemaContext'
import { withLoading } from './hoc/withLoading'
import { getLanguages } from  './const/languages'
import { THEMAS } from './contexts/ThemaContext'
import App from './App'

const AppComponent = withLoading(App, getLanguages)

export class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { thema: THEMAS.dark };
    }
    toggleThema() {
        const nextThema = this.state.thema == THEMAS.dark ? THEMAS.light : THEMAS.dark;
        this.setState({thema: nextThema})
    }
    render () {
        const { thema } = this.state
        return (
            <ThemaContext.Provider value={[thema, () => { this.toggleThema() }]}>
                <AppComponent />
            </ThemaContext.Provider>
        )
    }
}