

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { findUsers } from '../store/actions';
import InfiniteScroll from '../components/infiniteScroll/index';
import TopBar from '../components/topBar';
import styled from 'styled-components'

const Main = styled.main`
  overflow: scroll;
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Home = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUsers('reuven'))
  }, [])

  return (
    <Main>
      <TopBar />
      <InfiniteScroll />
    </Main>
  )
}

export default Home
