import React from 'react';

import './style.scss';

export const BackgroundImage = ({src, alt=""}) => {
  return (
    <img className='background-image' src={src} alt={alt} />
  );
}