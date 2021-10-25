import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
