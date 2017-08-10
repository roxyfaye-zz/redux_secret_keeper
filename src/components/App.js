import React, { Component } from 'react';
import { link } from 'react-router-dom'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Got Secrets? </h1>
          <p> Store your Secrets here </p>
        <button type="button"><Link to='/Register'>Register</Link></button>
        <button type="button"><Link to='/Login'>Login</Link></button>
      </div>
    );
  }
}

export default App;
