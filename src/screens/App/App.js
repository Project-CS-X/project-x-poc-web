import React from 'react'
import './App.scss'
import { Link } from 'react-router-dom'
import { times } from 'lodash'
import RandomIcon from '../../components/RandomIcon/RandomIcon'

function App() {
  return (
      <header>
        {
          times(20, i => <RandomIcon key={i}/>)
        }
        
        <div className="overlay"></div>

        <div className="appPageNav">
          <p>
            Project X Web Version Test
          </p>
          <div className="menu-container">
            <Link className="App-link" to="/layout">Lesson Layout Test</Link>-
            <Link className="App-link" to="/layout-markdown">Lesson Markdown Instructions Test</Link>-
            <Link className="App-link" to="/layout-wizard">Lesson Wizard Test</Link> 
          </div>
        </div>
      </header>
  )
}

export default App
