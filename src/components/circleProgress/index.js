

import { useSelector } from 'react-redux'
import { selectLoad } from '../../store/selctors'
import CircularProgress from '@material-ui/core/CircularProgress';

const circleProgress = () => {

  const load = useSelector(selectLoad);

  return load ? <CircularProgress style={{position: 'fixed'}}  /> : null
  
}

export default circleProgress
