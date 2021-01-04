

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findUsers } from '../store/actions';
import { selectLoad } from '../store/selctors'
import InfiniteScroll from '../components/infiniteScroll/index';
import TopBar from '../components/topBar';
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';


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
  const load = useSelector(selectLoad);

  console.log('load', load)

  useEffect(() => {
    dispatch(findUsers('reuven'))
  }, [])

  return (
    <Main>
      {load ? <CircularProgress style={{position: 'fixed'}}/> : null}

      <TopBar />
      <InfiniteScroll />
    </Main>
  )
}

export default Home
