import React, { Component } from 'react';
import Calculator from './containers/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
