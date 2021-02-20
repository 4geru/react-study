import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from  './const/languages'
import styled from 'styled-components'
import { Button } from './components/button'
import { withLoading } from './hoc/withLoading'
import { Modal } from './components/modal'
import { Header } from './Header';
import { ThemaContext } from './contexts/ThemaContext'

const Container = styled.div`
  height: 100%;
  color: ${({thema}) => thema.color};
  background-color: ${({thema}) => thema.backgroundColor};
`

class App extends React.Component {
  static contextType = ThemaContext;

  constructor(props) {
    super()
    this.state = {
      tab: 'list',
      langs: props.data
    }
  }
  componentDidMount() {
    this.fetchLanguages();
    console.log('App.js:componentDidMount')
  }
  async fetchLanguages() {
    const langs = await getLanguages();
    this.setState({langs});
  }
  addLang(lang) {
    this.setState({
      langs: [...this.state.langs, lang],
      tab: 'list'
    })
  }
  render() {
    const { color, tab, langs } = this.state
    const [thema] = this.context
    return (
      <Container thema={ thema }>
          <Header
            tab={tab}
            setTab={(t) => {this.setState({tab: t})}}
          />
        { tab === 'list' ? <List langs={ langs } /> : <Form onAddLang={(lang) => { this.addLang(lang) }} />}
      </Container>
    )
  }
}

export default App;
