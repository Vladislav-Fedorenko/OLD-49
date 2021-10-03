import React from 'react';

import './style.scss';

export const Button = ({
  text = "",
  textStyle="neon",
  buttonStyle="",
  textColor="#fff",
  className = "",
  onClick,
  rest
}) => {
  const cssProps = {
    "--buttonColor": textColor,
  };
  return (
    <button
      className={`button button--${textStyle} button--${buttonStyle} ${className}`}
      style={cssProps}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}