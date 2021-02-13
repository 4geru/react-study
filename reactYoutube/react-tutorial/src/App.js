import { useState } from 'react';
import { List } from './List';
import { Form } from './Form';
import { Table } from './Table';
import { LANGUAGES } from './const/languages'

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    setLangs([...langs, lang])
    setTab('list')
  }

  const deleteLang = (index) => {
    langs.splice(index, 1)
    setLangs(langs)
    setTab('list')
  }

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
          <List languages={langs} /> :
          tab === 'form' ?
            <Form onAddLang={addLang} /> :
            <Table languages={langs} onDeleteLang={deleteLang} />
      }
    </div>
  );
}

export default App;
