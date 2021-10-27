import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
            </Switch>
        </Router>
    )
}

export default AppRouter
