import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-icon" alt="icon" />
      <img src={logo} className="App-icon" alt="icon" />
      <img src={logo} className="App-icon" alt="icon" />
      <img src={logo} className="App-icon" alt="icon" />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
