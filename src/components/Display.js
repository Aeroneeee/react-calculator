import React, { useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext';

const Display = () => {
  const { displayValue } = useContext(CalculatorContext);
  return (
    <div className="display">
      {displayValue}
    </div>
  );
};

export default Display;