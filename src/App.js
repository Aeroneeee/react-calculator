import React, { useState, useEffect, useCallback } from 'react';
import CalculatorContext from './contexts/CalculatorContext';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';

import './App.css';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = useCallback((digit) => {
    if (value === '0') {
      setValue(digit.toString());
    } else {
      setValue(value + digit.toString());
    }
  }, [value]);

  const handleOperatorClick = useCallback((nextOperator) => {
    if (operator !== null) {
      if (operator === '+') {
        setMemory(memory + parseFloat(value));
      } else if (operator === '-') {
        setMemory(memory - parseFloat(value));
      } else if (operator === 'x') {
        setMemory(memory * parseFloat(value));
      } else if (operator === '/') {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    setValue('0');
    setOperator(nextOperator);
  }, [value, operator, memory]);

  const handleEqualsClick = useCallback(() => {
    if (operator === '+') {
      setValue((memory + parseFloat(value)).toString());
    } else if (operator === '-') {
      setValue((memory - parseFloat(value)).toString());
    } else if (operator === 'x') {
      setValue((memory * parseFloat(value)).toString());
    } else if (operator === '/') {
      setValue((memory / parseFloat(value)).toString());
    }
    setMemory(null);
    setOperator(null);
  }, [value, operator, memory]);

  const handleToggleSign = () => {
    setValue((parseFloat(value) * -1).toString())
  }

  const handleClearClick = useCallback(() => {
    setValue('0');
    setMemory(null);
    setOperator(null);
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
    } else if (key === '+') {
      handleOperatorClick('+');
    } else if (key === '-') {
      handleOperatorClick('-');
    } else if (key === '*') {
      handleOperatorClick('x');
    } else if (key === '/') {
      handleOperatorClick('/');
    } else if (key === 'Enter' || key === '=') {
      handleEqualsClick();
    } else if (key === 'Escape') {
      handleClearClick();
    }
  }, [handleDigitClick, handleOperatorClick, handleEqualsClick, handleClearClick]);

  return (
    <CalculatorContext.Provider value={{
      value,
      memory,
      operator,
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