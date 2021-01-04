import React, { useEffect, useRef, useCallback } from 'react';
import InfiniteList from './InfiniteList';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector, useDispatch } from 'react-redux'
import { addPage, getUsersPaging } from "../../store/actions";
import {selectUsersStore} from '../../store/selctors';
import {PER_PAGE, SCROLL_HEIGHT} from '../../utils/consts';
import styled from 'styled-components';

const ContainerList =styled.div`
    height: ${props => props.height };
    margin: 0 auto;
    overflow: scroll;
`;

const InfiniteScroll = () => {
  const loader = useRef(null);
  const usersStore = useSelector(selectUsersStore);
  const dispatch = useDispatch();
  const isPaging = usersStore.total_count / PER_PAGE >= usersStore.page;

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
    if (usersStore.total_count && !isPaging) {
      return;
    }
    dispatch(getUsersPaging(usersStore.page))
  }, [usersStore.page])

  return (
    <ContainerList height={SCROLL_HEIGHT}>
      <InfiniteList data={usersStore.users} />

      <div ref={loader}  >
        {isPaging ? <LinearProgress style={{width: 'calc(100vw - 110px'}}/> : null}
        <p style={{ fontSize: '10px', visibility: 'hidden' }}>.</p>
      </div>
    </ContainerList>
  )
}

export default InfiniteScroll;