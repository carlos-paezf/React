import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
            </Switch>
        </Router>
    )
}

export default AppRouter
