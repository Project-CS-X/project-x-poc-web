import React from 'react'
import './NavigationMenu.scss'
import { Link, withRouter } from 'react-router-dom'

function NavigationMenu(props) {
  return props.location.pathname !== '/' ? <Link className="App-link" to="/">Home</Link> : null
}

export default withRouter(NavigationMenu)
