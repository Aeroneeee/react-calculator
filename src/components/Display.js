import React, { useContext, useEffect, useRef } from 'react'
import CalculatorContext from '../contexts/CalculatorContext';

import { addCommas } from '../utils'

const Display = () => {
  const { displayValue } = useContext(CalculatorContext);

  const displayRef = useRef(null);

	useEffect(() => {
    const display = displayRef.current;
    const fontSize = Math.max(42 - displayValue.length, 12);
		console.log('fontSize', fontSize)
    display.style.fontSize = `${fontSize}px`;
  }, [displayValue]);

  return (
    <div className="display" ref={displayRef}>
      {addCommas(displayValue)}
    </div>
  );
};

export default Display;