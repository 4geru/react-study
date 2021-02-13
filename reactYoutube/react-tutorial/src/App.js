import { useState } from 'react';
import { List } from './List';
import { Form } from './Form';
import { Table } from './Table';

function App() {
  const [tab, setTab] = useState('list');

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => {setTab('list')}}>リスト</li>
          <li onClick={() => {setTab('form')}}>フォーム</li>
          <li onClick={() => {setTab('table')}}>テーブル</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ?
          <List /> :
          tab === 'form' ?
            <Form /> :
            <Table />
      }
    </div>
  );
}

export default App;
