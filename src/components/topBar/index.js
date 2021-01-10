import styled from 'styled-components';
import SearchBar from '../searchBar';

const TopBarContainer = styled.div`
  display: flex; 
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-height: 10vh;
`

const H1 = styled.h1`
  text-align: center;
`

const TopBar = () => {

  return (
    <TopBarContainer>
      <H1 style={{textAlign: 'center'}}>!Welcome to Usertron</H1>
      <Img src={'/github-logo.svg'}  alt={'github-logo'}/>
      <SearchBar />
    </TopBarContainer>

  )
}

export default TopBar;