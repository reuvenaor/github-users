

import Avatar from '@material-ui/core/Avatar';

import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import {PER_PAGE, SCROLL_HEIGHT} from '../../utils/consts';

const CardContainer = styled.div`
  padding: 1px 20px;
  display: flex;
  height: ${props => `calc(${props.height} / ${props.perpage})` };
  margin-top: 15px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
`;

const TextWrap = styled.div`
  height: 100%; 
  width: 35%; 
  overflow-wrap: break-word;
  padding-left: 1%;
`

const HeaderWrap = styled(TextWrap)`
  flex: 1;
`

const EmailText = styled.p`
    @media (max-width: 600px) {
      font-size: 10px;
  }
`

const githubCard = ({ data }) => {
  return (
    <>
      <CardContainer perpage={PER_PAGE} height={SCROLL_HEIGHT}>
        <Avatar style={{ height: 90, width: 90 }} alt="Avatar" src={data.avatar_url} />
        <HeaderWrap>
          <h3 >{data.login}</h3>
        </HeaderWrap>
        <TextWrap>
          <EmailText>{data.html_url}</EmailText>
        </TextWrap>
      </CardContainer>
      <Divider style={{ width: 'calc(100vw - 110px)', height: 2 }} />
    </>
  )
}

export default githubCard;