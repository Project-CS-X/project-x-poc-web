import React from 'react'
import './NavigationMenu.scss'
import { Link, withRouter } from 'react-router-dom'

function NavigationMenu(props) {
  return props.location.pathname !== '/' ? (
    <div className="navMenu">
      <Link className="App-link" to="/">Home</Link>
    </div>
  ) : null
}

export default withRouter(NavigationMenu)
