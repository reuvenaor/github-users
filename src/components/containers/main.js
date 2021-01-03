import styled from 'styled-components'

export default styled.main`
  overflow: scroll;
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`