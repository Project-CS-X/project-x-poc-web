import React from 'react';
import './App.scss';
import RandomIcon from '../../components/RandomIcon/RandomIcon'
import { times } from 'lodash'

function App() {
  return (
    <div className="App">
      {
        times(20, i => <RandomIcon key={i}/>)
      }
      <header className="App-header">
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
