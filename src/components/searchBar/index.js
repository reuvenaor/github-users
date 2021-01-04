import { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { findUsers } from "../../store/actions";
import { useDispatch } from 'react-redux'


const SearchBarContainer = styled.div`
    padding: 2px 4px;
    display: flex;
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
      <TextField
        label="Find Users"
        onChange={handleChange}
        style={{ flex: 6 }}
        value={val}
      />
    </SearchBarContainer>
  )
}

export default SearchBar;