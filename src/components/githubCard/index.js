

import Avatar from '@material-ui/core/Avatar';

import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import {PER_PAGE, SCROLL_HEIGHT} from '../../utils/consts';


const CardContainer = styled.div`
padding: 5px 10px;
display: flex;
height: ${props => `calc(${props.height} / ${props.perpage})` };
margin-top: 15px;
width: 100vw;
align-items: center;
justify-content: space-between;
direction: ltr;
`;

const githubCard = ({ data }) => {
  console.log('user data', data)
  return (
    <>
      <CardContainer perpage={PER_PAGE} height={SCROLL_HEIGHT}>
        <Avatar style={{ height: 100, width: 100 }} alt="Avatar" src={data.avatar_url} />
        <div style={{ height: '100%', flex: 1, width: '30%', overflowWrap: 'break-word', paddingLeft: '1%'  }}>
          <p >{data.login}</p>
        </div>
        <div style={{ height: '100%', width: '30%', overflowWrap: 'break-word', paddingLeft: '1%' }}>
          <p style={{height: '10%'}}>{data.html_url}</p>
        </div>

      </CardContainer>
      <Divider style={{ width: 'calc(100vw - 110px)', height: 2 }} />

    </>
  )
}

export default githubCard;