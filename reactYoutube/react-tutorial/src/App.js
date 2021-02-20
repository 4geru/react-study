import { useState, useEffect, useContext } from 'react';
import { List } from './List';
import { Form } from './Form';
import { Table } from './Table';
import { getLanguages } from './const/languages'
import { withLoading } from './hoc/withLoading'
import { Header } from './Header'
import { ThemaContext } from './context/ThemaContext';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  color: ${({thema}) => thema.color};
  background-color: ${({thema}) => thema.backgroundColor};
`

function App({ data }) {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);
  const [thema] = useContext(ThemaContext);

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
    <Container thema={thema}>
      <Header
        tab={tab}
        setTab={setTab}
      />
      {
        tab === 'list' ?
          <List languages={langs} /> :
          tab === 'form' ?
            <Form onAddLang={addLang} /> :
            <Table languages={langs} onDeleteLang={deleteLang} />
      }
    </Container>
  );
}

export default App;
