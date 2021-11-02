import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import calculate from '../logic/calculate.js';
import './calculator.css';

function CalculatorComponent() {
  const [result, setResult] = useState(0);
  const calcData = { total: null, next: null, operation: null };

  const handlePress = (e) => {
    const pressedButton = e.currentTarget;
    const buttonName = pressedButton.innerText;

    const newResult = calculate(calcData, buttonName);

    if (newResult.next) {
      setResult(newResult.next);
    } else if (newResult.total) {
      setResult(newResult.total);
    } else {
      setResult(0);
    }

    calcData.total = newResult.total;
    calcData.next = newResult.next;
    calcData.operation = newResult.operation;
  };

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => button.addEventListener('click', handlePress));
  }, []);

  return (
    <div className="calculator-container">
        <span className="result">{result}</span>
        <button className="grey-button" type="button">AC</button>
        <button className="grey-button" type="button">+/-</button>
        <button className="grey-button" type="button">%</button>
        <button className="orange-button" type="button">÷</button>
        <button className="grey-button" type="button">7</button>
        <button className="grey-button" type="button">8</button>
        <button className="grey-button" type="button">9</button>
        <button className="orange-button" type="button">x</button>
        <button className="grey-button" type="button">4</button>
        <button className="grey-button" type="button">5</button>
        <button className="grey-button" type="button">6</button>
        <button className="orange-button" type="button">-</button>
        <button className="grey-button" type="button">1</button>
        <button className="grey-button" type="button">2</button>
        <button className="grey-button" type="button">3</button>
        <button className="orange-button" type="button">+</button>
        <button className="n0 grey-button" type="button">0</button>
        <button className="grey-button" type="button">.</button>
        <button className="orange-button" type="button">=</button>
    </div>
  );
}

export default CalculatorComponent;
