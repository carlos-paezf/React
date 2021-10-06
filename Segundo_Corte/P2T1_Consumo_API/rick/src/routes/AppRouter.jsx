import React from 'react'
import { BrowserRouter as BR, Switch, Route, Redirect } from 'react-router-dom'
import DetailCharacter from '../components/DetailCharacter'
import Characters from '../pages/Characters'
import Episodes from '../pages/Episodes'
import NotFound from '../pages/NotFound'
import DetailEpisode from '../components/DetailEpisode'
import Navbar from '../components/Navbar'


const AppRouter = () => {
    return (
        <BR>
            <Navbar />
            <Switch>
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/character" component={Characters} />
                <Route exact path="/episode" component={Episodes} />
                <Route exact path="/character/:id" component={DetailCharacter} />
                <Route exact path='/episode/:id' component={DetailEpisode} />
                <Route component={Characters} />
                <Redirect to="/404" />
            </Switch>
        </BR>
    )
}

export default AppRouter
