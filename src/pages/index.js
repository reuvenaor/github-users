

import {useEffect} from 'react'
import Main from '../components/containers/main';
import { useDispatch } from 'react-redux'
import {findUsers} from '../store/actions';
import InfiniteScroll from '../components/infiniteScroll/index';


const Home = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUsers('reuven'))
  },[])

  return (
    <Main>
        <InfiniteScroll />
    </Main>
  )
}

export default Home
