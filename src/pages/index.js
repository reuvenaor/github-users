

import {useEffect} from 'react'
import Main from '../components/containers/main';
import { useSelector, useDispatch } from 'react-redux'
import {findUsers} from '../store/actions';

const Home = (props) => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUsers('reuven'))
  },[])

  return (
    <Main>

    </Main>
  )
}

export default Home
