import React, { useContext } from 'react';
import CalculatorContext from '../contexts/CalculatorContext';
import Button from './Button';


const ButtonPanel = () => {
  const {
    value,
    handleDigitClick,
    handleOperatorClick,
    handleEqualsClick,
    handleToggleSign
  } = useContext(CalculatorContext);
  
  return (
    <div className="button-panel">
      <div className="row">
        <Button text={`${parseFloat(value) ? 'C' : 'AC'}`} color="light-gray" handleClick={handleOperatorClick} />
        <Button text="+/-" color="light-gray" handleClick={handleToggleSign} />
        <Button text="%" color="light-gray" handleClick={handleOperatorClick} />
        <Button text="÷" color="orange" handleClick={handleOperatorClick} />
      </div>
      <div className="row">
        <Button text="7" handleClick={handleDigitClick} />
        <Button text="8" handleClick={handleDigitClick} />
        <Button text="9" handleClick={handleDigitClick} />
        <Button text="x" color="orange" handleClick={handleOperatorClick} />
      </div>
      <div className="row">
        <Button text="4" handleClick={handleDigitClick} />
        <Button text="5" handleClick={handleDigitClick} />
        <Button text="6" handleClick={handleDigitClick} />
        <Button text="-" color="orange" handleClick={handleOperatorClick} />
      </div>
      <div className="row">
        <Button text="1" handleClick={handleDigitClick} />
        <Button text="2" handleClick={handleDigitClick} />
        <Button text="3" handleClick={handleDigitClick} />
        <Button text="+" color="orange" handleClick={handleOperatorClick} />
      </div>
      <div className="row">
        <Button text="0" wide handleClick={handleDigitClick} />
        <Button text="." handleClick={handleDigitClick} />
        <Button text="=" color="orange" handleClick={handleEqualsClick} />
      </div>
    </div>
  );
};

export default ButtonPanel;
