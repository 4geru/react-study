import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from  './const/languages'
import styled from 'styled-components'
import { Button } from './components/button'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'}
`


class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      color: "#000000",
      tab: 'list',
      langs: []
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
  changeDesciption() {
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.setState({
      color: randomColor
    })
  }
  addLang(lang) {
    this.setState({
      langs: [...this.state.langs, lang],
      tab: 'list'
    })
  }
  render() {
    const { color, tab, langs } = this.state
    const style = {
      color: color
    }
    return (
      <div style={ style }>
        <Header>
          <HeaderUl>
            <HeaderLi focused={tab === 'list'} onClick={() => this.setState({tab: 'list'})}>リスト</HeaderLi>
            <HeaderLi focused={tab === 'form'} onClick={() => this.setState({tab: 'form'})}>フォーム</HeaderLi>
          </HeaderUl>
        </Header>

        { tab === 'list' ? <List langs={ langs } /> : <Form onAddLang={(lang) => { this.addLang(lang) }} />}
        <Button onClick={ () => this.changeDesciption() }>button</Button>
      </div>
    )
  }
}

export default App;
