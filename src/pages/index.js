

// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { findUsers } from '../store/actions';
// import { selectLoad } from '../store/selctors'
import InfiniteScroll from '../components/infiniteScroll/index';
import TopBar from '../components/topBar';
import styled from 'styled-components'
import CircularProgress from '../components/circleProgress'


const Main = styled.main`
  overflow: scroll;
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Home = () => {

  return (
    <Main>
      <CircularProgress />
      <TopBar />
      <InfiniteScroll />
    </Main>
  )
}

export default Home
