## リンク

## したこと
Reactにstyleを当てる方法

### inline CSS

```javascript
const divStyle = {
    color: 'red'
};

function TestComponent() {
    return <div className={ divStyle }>messsage</div>
}
```

### CSS Module

```javascript
import styles from './style.css'


function TestComponent() {
    return <div className={ styles.test }>messsage</div>
}
```

### styled-components

```javascript
import styled from 'styled-components'


const TestDiv = styled.div`
    color: 'blue';
`

const TestComponent() {
    return <TestDiv>messsage</TestDiv>
}
```

- CSSをimportして利用する
- 各タグに直接styleを当てる

## styled-components
Styleをcomponentとして表現する

```javascript
import styled from 'styled-components';

export const Button = styled.button`
    border: none;
`

const ExtendButton = styled(Button)`
  list-style: none;

  ::before {
    content: "${props => props.focused ? '🍣' : '🍺' }";
  } 
  `
```

```javascript
function App() {
  return (
    <div>
        <ExtendButton focused={true}>リスト</ExtendButton>
        <ExtendButton focused={false}>フォーム</ExtendButton>
    </div>
  );
}
```

## **工夫したこと**
- タブの前にemojiを表示させた
  - 選択中のものには 🍣 を未選択のものには 🍺 を表示させた
