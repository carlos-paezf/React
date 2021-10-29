import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppScreen from '../pages/AppScreen'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
                <Route exact path="/" component={AppScreen} />
            </Switch>
        </Router>
    )
}

export default AppRouter
