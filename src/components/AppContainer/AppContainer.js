import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Routes from '../../configs/Routes'
import App from '../../screens/App/App'

import './AppContainer.scss'

function AppContainer() {
    return (
        <Router>
            <div className="App">
                <NavigationMenu />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <div className="contentPages">
                        { Routes.map( route => <Route {...route}/> ) }
                    </div>
                </Switch>
            </div>
        </Router>
    )
}

export default AppContainer