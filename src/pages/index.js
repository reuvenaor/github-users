
import { setUsers } from '../store/actions';
import InfiniteScroll from '../components/infiniteScroll/index';
import TopBar from '../components/topBar';
import styled from 'styled-components'
import CircularProgress from '../components/circleProgress';
import { wrapper } from '../store/store';
import githubApi from '../pages/api/github';

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    try {
      const data = await githubApi({body: { page: 1, query: 'reuven n'}});
      store.dispatch((setUsers({users: data.data.data.items, total_count: data.data.data.total_count})));
    } catch (error) {
      console.log(error)
    }
  }
);


const Main = styled.main`
  height: 100vh;
  overflow: scroll;
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
