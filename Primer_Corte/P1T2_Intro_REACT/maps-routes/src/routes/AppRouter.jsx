import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Car from '../pages/Car/Car'
import CarDetail from '../pages/Car/Detail/CarDetail'
import Contact from '../pages/Contact/Contact'
import NOTFound from '../pages/NotFound'
import Navbar from '../components/estructura/Navbar'


const AppRouter = () => {
    return (
        <HashRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/car" component={Car} />
                <Route exact path="/car-q=:id" component={CarDetail} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NOTFound} />
            </Switch>
        </HashRouter>
    )
}

export default AppRouter
