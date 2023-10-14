import React, { useState } from 'react';
import './style.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
      setInput(''); // Clear the input after calculation
    } catch (error) {
      setResult('Error');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateResult();
    }
  };

  return (
    <div className="calculator" onKeyPress={handleKeyPress} tabIndex={0}>
      <div className="screen">
        <div className="display">{input || result}</div>
      </div>
      <div className="keypad">
        <div className="numbers">
          <div className="row">
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={() => handleButtonClick('.')}>.</button>
            <button onClick={() => handleButtonClick('=')}>=</button>
          </div>
        </div>
        <div className="operations">
          <div className="row">
            <button onClick={() => handleButtonClick('C')}>C</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('')}></button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('+')}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;