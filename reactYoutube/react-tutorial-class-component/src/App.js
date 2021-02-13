import React from 'react';
import { List } from './List';
import { Form } from './Form';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      color: "#000000",
      tab: 'list'
    }
  }
  changeDesciption() {
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.setState({
      color: randomColor
    })
  }
  render() {
    const { color, tab } = this.state
    const style = {
      color: color
    }
    return (
      <div style={ style }>
        <header>
          <ul>
            <li onClick={() => this.setState({tab: 'list'})}>リスト</li>
            <li onClick={() => this.setState({tab: 'form'})}>フォーム</li>
          </ul>
        </header>
        <hr />
        { tab === 'list' ? <List /> : <Form />}
        <button onClick={ () => this.changeDesciption() }>button</button>
      </div>
    )
  }
}

export default App;
