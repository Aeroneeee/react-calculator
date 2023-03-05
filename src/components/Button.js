import React from 'react';

const Button = ({ text, color, wide, handleClick }) => {
  const classes = `button ${color || ''} ${wide ? 'wide' : ''}`;
  
  return (
    <button className={classes} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};

export default Button;
