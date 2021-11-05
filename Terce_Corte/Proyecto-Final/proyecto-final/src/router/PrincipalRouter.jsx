import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import GameDetail from '../pages/GameDetail'
import GameScreen from '../pages/GameScreen'
import HomeScreen from '../pages/HomeScreen'
import ShopScreen from '../pages/ShopScreen'
import UserSettings from '../pages/UserSettings'

const PrincipalRouter = () => {
    return (
        <>
            <Sidebar />
            <Switch>
                <Route exact path="/home" component={HomeScreen} />
                <Route exact path="/games" component={GameScreen} />
                <Route exact path="/games/:idGame" component={GameDetail} />
                <Route exact path="/shop" component={ShopScreen}/>
                <Route exact path="/statistics" />
                <Route exact path="/settings" />
                <Route exact path="/user/config" component={UserSettings} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}

export default PrincipalRouter
