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
                <div className="appContainer">
                    <Switch>
                            <Route exact path="/" component={App}/>
                            <> { Routes.map( (route, i) => <Route key={i} {...route}/> ) } </>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppContainer