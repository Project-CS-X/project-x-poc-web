import React from 'react'
import './NavigationMenu.scss'
import { Link } from 'react-router-dom'

function NavigationMenu(props) {
  return (
    <div className="navMenu">
      <Link className="App-link" to="/">Home</Link>
      <h2 className="sectionTitleHolder">{props.sectionName}</h2>
    </div>
  )
}

export default NavigationMenu
