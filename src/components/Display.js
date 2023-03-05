import React, { useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext';

const Display = () => {
  const { value } = useContext(CalculatorContext);
  return (
    <div className="display">
      {value}
    </div>
  );
};

export default Display;