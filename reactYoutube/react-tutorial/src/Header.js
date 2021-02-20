import styled from 'styled-components';
import { Button } from './components/button';
import { useContext } from 'react';
import { ThemaContext } from './context/ThemaContext'

const Container = styled.header`
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
  border-bottom: ${({focused}) => focused ? '2px solid #F44336' : ''};

  ::before {
    content: "${({focused}) => focused ? '🍣' : '🍺' }";
  } 
`

const HeaderButton = styled(Button)`
  padding: 0;
  margin-bottom: 4px;
`

export const Header = ({tab, setTab}) => {
    const [thema, toggleThema] = useContext(ThemaContext)

    return (
        <Container>
            <HeaderUl>
                <HeaderLi focused={tab === 'list' } onClick={() => {setTab('list')}}>リスト</HeaderLi>
                <HeaderLi focused={tab === 'form' } onClick={() => {setTab('form')}}>フォーム</HeaderLi>
                <HeaderLi focused={tab === 'table' } onClick={() => {setTab('table')}}>テーブル</HeaderLi>
                <HeaderButton onClick={toggleThema}>
                    テーマ変更
                </HeaderButton>
            </HeaderUl>
        </Container>
    )
}