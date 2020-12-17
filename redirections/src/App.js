import React, { Component } from 'react'
import Inputs from './Input'
import Outputs from './Output'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Validate URLs for Redirections</h1>
        </header>
        <div className="container">
          <Inputs />
          <Outputs />
        </div>
      </div>
    );
  }
}

export default App;
