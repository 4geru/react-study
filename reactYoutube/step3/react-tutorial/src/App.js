import React from 'react';
import { List } from './List';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      description: 'クリック前の表示',
      color: "#000000"
    }
  }
  changeDesciption() {
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.setState({
      description: 'クリック後の表示です ',
      color: randomColor
    })
  }
  render() {
    const { description, color } = this.state
    const style = {
      color: color
    }
    return (
      <div style={ style }>
        { description  }
        クラスコンポーネントにしてみました
        <List title="取扱言語一覧" />
        <button onClick={ () => this.changeDesciption() }>button</button>
      </div>
    )
  }
}

export default App;
