import React from 'react'; // eslint-disable-line no-unused-vars
import './calculator.css';

class Calculator extends React.Component {
  render() { // eslint-disable-line class-methods-use-this
    return (
      <div className="calculator-container">
          <span className="result">0</span>
          <button className="grey-button" type="button">AC</button>
          <button className="grey-button" type="button">+/-</button>
          <button className="grey-button" type="button">%</button>
          <button className="orange-button" type="button">&#247;</button>
          <button className="grey-button" type="button">7</button>
          <button className="grey-button" type="button">8</button>
          <button className="grey-button" type="button">9</button>
          <button className="orange-button" type="button">*</button>
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
}

export default Calculator;
