import { useState } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { findUsers } from "../../store/actions";
import { useDispatch } from 'react-redux'


const SearchBarContainer = styled(Paper)`
    padding: 2px 4px;
    display: flex;
    position: fixed;
    top: 10px;
    z-index: 2;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
    direction: ltr;
`;

const SearchBar = () => {

  const [val, setVal] = useState('')
  const dispatch = useDispatch();


  const handleChange = (e) => {
    e.preventDefault();
    setVal(e.target.value)
  }

  const onFind = () => {
    dispatch(findUsers(val))
  }

  return (
    <SearchBarContainer>

      <IconButton style={{ flex: 1 }}
        type="submit" aria-label="search" onClick={onFind}>
        <SearchIcon />
      </IconButton>
      <Divider style={{height: 24}}  orientation="vertical" />
      <InputBase
        placeholder="Find Users"
        inputProps={{ 'aria-label': 'Find Users' }}
        onChange={handleChange}
        value={val}
        style={{ flex: 6, padding: 2 }}
      />
    </SearchBarContainer>
  )
}

export default SearchBar;