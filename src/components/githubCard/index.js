

import Avatar from '@material-ui/core/Avatar';
import {PER_PAGE, SCROLL_HEIGHT} from '../../utils/consts';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

const CardContainer = styled.div`
  padding: 1px 20px;
  display: flex;
  height: ${props => `calc(${props.height} / ${props.perpage} - 10px)` };
  min-height: 100px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
`;

const TextWrap = styled.div`
  height: 90px;
  width: 100%; 
  overflow-wrap: break-word;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

const DividerSt = styled(Divider)`
  width: calc(100vw - 110px);
  height: 2px;
`

const AvatarSt = styled(Avatar)`
  @media (max-width: 600px) {
    transform: scale(0.9)
  }
`

const githubCard = ({ data }) => {
  return (
    <>
      <CardContainer height={SCROLL_HEIGHT} perpage={PER_PAGE}>
        <AvatarSt style={{ width: 90, height: 90 }} alt="Avatar" src={data.avatar_url} />
        <TextWrap>
          <div>
            <strong >USER: </strong>
            <strong >{data.login}</strong>
          </div>
          <div>
            <strong >URL: </strong>
            <a href={data.html_url}>{data.html_url}</a>
          </div>
        </TextWrap>
      </CardContainer>
      <DividerSt/>
    </>
  )
}

export default githubCard;