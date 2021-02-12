import { useState } from 'react';
import { List, Message } from './List';

function App() {
  const [description, setDescriptoin] = useState('クリック前の表示');
  const [count, countUp] = useState(0);
  const changeDescription = () => {
    countUp(count + 1);
    setDescriptoin(`クリック後の表示です(${count}回目です)`);
  }

  return (
    <div>
      ゼロから始めるReact入門<br />
      { description }<br/>
      <button onClick={changeDescription}>button</button>

      <Message title="取扱言語"/>
      <List title="取扱言語"/>
    </div>
  );
}

export default App;
