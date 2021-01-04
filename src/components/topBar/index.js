import styled from 'styled-components';
import SearchBar from '../searchBar'

const TopBarContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-height: 10vh;
`

const TopBar = () => {

  return (
    <TopBarContainer>
      <h1>!Welcome to Usertron</h1>
      <Img src={'/github-logo.svg'}  alt={'github-logo'}/>
      <SearchBar />
    </TopBarContainer>

  )
}

export default TopBar;