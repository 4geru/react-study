## リンク
https://www.youtube.com/watch?v=ve85ejcYiZ0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=3
https://qiita.com/yassun-youtube/items/2ed8601e4fa477726705

## したこと

###  Class Components/Function Componentsについて
#### componentの書き方
- Function Components

```
function App() {
  return (
      ...
  );
}
```

- Class Components
```
// 外部で使わないもの
class App extends React.Component {
  render() {
      ...
  }
}

// 外部で使うもの
export class List extends React.Component {
  render() {
      ...
  }
}
```

#### stateの管理の仕方
- Function Components
    - 変数ごとに更新

```
function App() {
  const [description, setDescriptoin] = useState('クリック前の表示');
  const changeDescription = () => {
    setDescriptoin(`クリック後の表示です`);
  }

  return (
    <div>
      <button onClick={changeDescription}>button</button>
    </div>
  );
}
```

- Class Components
    - setStateで更新

```
class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      description: 'クリック前の表示'
    }
  }
  changeDesciption() {
    this.setState({
      description: 'クリック後の表示です '
    })
  }
  render() {
    const { description, color } = this.state
    return (
      <div>
        <button onClick={ () => this.changeDesciption() }>button</button>
      </div>
    )
  }
}
```

## 工夫したこと
- ボタンを押すと色が変わるようにした
