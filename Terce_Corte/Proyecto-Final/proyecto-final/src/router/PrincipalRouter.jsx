import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import HomeScreen from '../pages/HomeScreen'

const PrincipalRouter = () => {
    return (
        <>
            <Sidebar />
            {/* <main> */}
                <Switch>
                    <Route exact path="/home" component={HomeScreen} />
                    <Route exact path="/games" /* component={GamesScreen} */ />
                    <Route exact path="/games/:id" /* component={Game} */ />
                    <Route exact path="/shop" />
                    <Route exact path="/statistics" />
                    <Route exact path="/settings" />
                    <Redirect to="/home" />
                </Switch>
            {/* </main> */}
        </>
    )
}

export default PrincipalRouter
