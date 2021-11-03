import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import GameDetail from '../pages/GameDetail'
import GameScreen from '../pages/GameScreen'
import HomeScreen from '../pages/HomeScreen'

const PrincipalRouter = () => {
    return (
        <>
            <Sidebar />
            <Switch>
                <Route exact path="/home" component={HomeScreen} />
                <Route exact path="/games" component={GameScreen} />
                <Route exact path="/games/:idGame" component={GameDetail} />
                <Route exact path="/shop" />
                <Route exact path="/statistics" />
                <Route exact path="/settings" />
                <Redirect to="/home" />
            </Switch>
        </>
    )
}

export default PrincipalRouter
