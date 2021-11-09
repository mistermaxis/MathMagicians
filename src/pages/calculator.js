import CalculatorComponent from '../components/calculator.js'; // eslint-disable-line no-unused-vars
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div>
        <h3>Let's do some math!</h3>
      </div>
      <div>
        <CalculatorComponent />
      </div>
    </div>
  );
}

export default Calculator;