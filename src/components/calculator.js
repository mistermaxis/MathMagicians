import React from 'react'; // eslint-disable-line no-unused-vars
import calculate from '../logic/calculate.js';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState(0);

  constructor(props) {
    this.calcData = { total: null, next: null, operation: null };
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => button.addEventListener('click', this.handlePress));
  }

  handlePress(event) {
    const pressedButton = event.currentTarget;
    const buttonName = pressedButton.innerText;

    const newResult = calculate(this.calcData, buttonName);

    if (newResult.next) {
      this.setState({ result: newResult.next });
    } else if (newResult.total) {
      this.setState({ result: newResult.total });
    } else {
      this.setState({ result: '0' });
    }

    this.calcData.total = newResult.total;
    this.calcData.next = newResult.next;
    this.calcData.operation = newResult.operation;
  }

    return (
      <div className="calculator-container">
          <span className="result">{this.state.result}</span>
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

export default Calculator;
