import React from 'react';
import './App.css';
import Calculator from './components/calculator.js'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  render() { // eslint-disable-line class-methods-use-this
    return (
      <div className="App">
        <header className="App-header">
          <h1>Math Magicians</h1>
        </header>
        <Calculator/>
      </div>
    );
  }
}

export default App;
