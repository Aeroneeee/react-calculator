import React, { useState, useEffect, useCallback } from 'react';
import CalculatorContext from './contexts/CalculatorContext';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';

import './App.css';

// constants
const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = 'x';
const DIVISION = '/';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState(null);

  const handleDigitClick = useCallback((digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit.toString());
    } else {
      setDisplayValue(displayValue + digit.toString());
    }
  }, [displayValue]);

  const handleOperatorClick = useCallback((nextOperator) => {
    if (selectedOperator !== null) {
      if (selectedOperator === ADDITION) {
        setStoredValue(storedValue + parseFloat(displayValue));
      } else if (selectedOperator === SUBTRACTION) {
        setStoredValue(storedValue - parseFloat(displayValue));
      } else if (selectedOperator === MULTIPLICATION) {
        setStoredValue(storedValue * parseFloat(displayValue));
      } else if (selectedOperator === DIVISION) {
        setStoredValue(storedValue / parseFloat(displayValue));
      }
    } else {
      setStoredValue(parseFloat(displayValue));
    }
    setDisplayValue('0');
    setSelectedOperator(nextOperator);
  }, [displayValue, selectedOperator, storedValue]);

  const handleEqualsClick = useCallback(() => {
    if (selectedOperator === ADDITION) {
      setDisplayValue((storedValue + parseFloat(displayValue)).toString());
    } else if (selectedOperator === SUBTRACTION) {
      setDisplayValue((storedValue - parseFloat(displayValue)).toString());
    } else if (selectedOperator === MULTIPLICATION) {
      setDisplayValue((storedValue * parseFloat(displayValue)).toString());
    } else if (selectedOperator === DIVISION) {
      setDisplayValue((storedValue / parseFloat(displayValue)).toString());
    }
    setStoredValue(null);
    setSelectedOperator(null);
  }, [displayValue, selectedOperator, storedValue]);

  const handleToggleSign = () => {
    setDisplayValue((parseFloat(displayValue) * -1).toString())
  }

  const handleClearClick = useCallback(() => {
    setDisplayValue('0');
    setStoredValue(null);
    setSelectedOperator(null);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = useCallback((event) => {
    const { key } = event;
    if (/\d/.test(key)) {
      handleDigitClick(parseInt(key, 10));
    } else if (key === ADDITION) {
      handleOperatorClick(ADDITION);
    } else if (key === SUBTRACTION) {
      handleOperatorClick(SUBTRACTION);
    } else if (key === '*') {
      handleOperatorClick(MULTIPLICATION);
    } else if (key === DIVISION) {
      handleOperatorClick(DIVISION);
    } else if (key === 'Enter' || key === '=') {
      handleEqualsClick();
    } else if (key === 'Escape') {
      handleClearClick();
    }
  }, [handleDigitClick, handleOperatorClick, handleEqualsClick, handleClearClick]);

  return (
    <CalculatorContext.Provider value={{
      displayValue,
      storedValue,
      selectedOperator,
      handleDigitClick,
      handleOperatorClick,
      handleEqualsClick,
      handleClearClick,
      handleToggleSign,
    }}>
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    </CalculatorContext.Provider>
  );
};

export default Calculator;