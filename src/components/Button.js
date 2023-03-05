import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, wide, handleClick }) => {
  const classes = `button ${color || ''} ${wide ? 'wide' : ''}`;
  
  return (
    <button className={classes} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
}

export default Button;
