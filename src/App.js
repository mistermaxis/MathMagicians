import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import './App.css';
import NavBar from './components/navbar.js'; // eslint-disable-line no-unused-vars
import Home from './pages/home.js'; // eslint-disable-line no-unused-vars
import Calculator from './pages/calculator.js'; // eslint-disable-line no-unused-vars
import Quote from './pages/quote.js'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
            <Route exact path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
