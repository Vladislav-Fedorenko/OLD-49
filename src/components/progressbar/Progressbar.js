import React from 'react';

import './style.scss';

export const Progressbar = ({value, maxValue = 100}) => {
  return (
    <div className="progress-bar">
      <progress className='bar' value={value} max={maxValue}/>
    </div>
  );
}