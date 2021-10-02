import React from 'react';

import './style.scss';

export const Button = ({
  text = "",
  textStyle="neon",
  textColor="#fff",
  className = "",
  onClick,
}) => {
  const cssProps = {
    "--buttonColor": textColor,
  };
  return (
    <button
      className={`button button--${textStyle} ${className}`}
      style={cssProps}
      onClick={onClick}
    >
      {text}
    </button>
  );
}