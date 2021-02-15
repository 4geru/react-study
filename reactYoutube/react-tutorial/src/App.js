import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { List } from './List';
import { Form } from './Form';
import { Table } from './Table';
import { getLanguages } from './const/languages'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24p 64px 0;
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
  border-bottom: ${props => props.focused ? '2px solid #F44336' : ''}

  ::before {
    content: "${props => props.focused ? '🍣' : '🍺' }";
  } 
  `

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    fetchLanguages()

    // 第二引数に変数を指定することも可能
    // }, [langs])
  })

  const fetchLanguages = async () => {
    const languages = await getLanguages()
    setLangs(languages)
  }

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
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list' } onClick={() => {setTab('list')}}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form' } onClick={() => {setTab('form')}}>フォーム</HeaderLi>
          <HeaderLi focused={tab === 'table' } onClick={() => {setTab('table')}}>テーブル</HeaderLi>
        </HeaderUl>
      </Header>
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
