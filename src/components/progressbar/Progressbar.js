import React, {useContext} from 'react';

import './style.scss';
import {AppContext} from '../../layout/context/Context';

export const Progressbar = ({maxValue = 100}) => {
  const {progressbarValue} = useContext(AppContext);

  return (
    <progress className='bar' value={progressbarValue} max={maxValue}/>
  );
}