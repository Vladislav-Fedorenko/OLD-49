import React from 'react';

import './style.scss';

export const BackgroundImage = ({src, alt="", style = {}}) => {
  return (
    <img className='background-image' src={src} alt={alt} style={style} />
  );
}