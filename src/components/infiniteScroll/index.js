import React, { useEffect, useRef, useCallback } from 'react';
import InfiniteList from './InfiniteList';
import ContainerList from '../containers/containerList';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector, useDispatch } from 'react-redux'
import { addPage, getUsersPaging } from "../../store/actions";
import {selectUsersStore} from '../../store/selctors';


const InfiniteScroll = () => {
  const loader = useRef(null);
  const usersStore = useSelector(selectUsersStore);
  const dispatch = useDispatch();
  const isPaging = usersStore.total_count / 4 >= usersStore.page;

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      dispatch(addPage());
    }
  }

  useEffect(() => {
    console.log('usersStore.total_count ', usersStore.total_count, 'usersStore.page', usersStore.page, usersStore.total_count / 4 >= usersStore.page)
    if (usersStore.total_count && !isPaging) {
      return;
    }
    dispatch(getUsersPaging(usersStore.page))
  }, [usersStore.page])

  return (
    <ContainerList>
      <InfiniteList data={usersStore.users} />

      <div className="loading" ref={loader}  >
        {isPaging ? <LinearProgress /> : null}
        <p style={{ fontSize: '10px', visibility: 'hidden' }}>.</p>

      </div>
    </ContainerList>
  )
}

export default InfiniteScroll;