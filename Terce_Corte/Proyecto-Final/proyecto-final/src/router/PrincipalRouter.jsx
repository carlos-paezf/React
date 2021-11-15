import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import GameDetail from '../pages/GameDetail'
import GameScreen from '../pages/GameScreen'
import HomeScreen from '../pages/HomeScreen'
import ManageGames from '../pages/ManageGames'
import ShopScreen from '../pages/ShopScreen'
import UserSettings from '../pages/UserSettings'

const PrincipalRouter = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/home" component={HomeScreen} />
                <Route exact path="/games" component={GameScreen} />
                <Route exact path="/games/:idGame" component={GameDetail} />
                <Route exact path="/shop" component={ShopScreen}/>
                <Route exact path="/settings" />
                <Route exact path="/statistics" />
                <Route exact path="/user/config" component={UserSettings} />
                <Route exact path="/user/manage-games" component={ManageGames} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}

export default PrincipalRouter
