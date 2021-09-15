import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Car from './pages/Car/'
import CarDetail from './pages/Car/Detail'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NOTFound from './pages/NotFound'

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/car" component={Car} />
                <Route path="/car/:id" component={CarDetail} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NOTFound} />
            </Switch>
        </HashRouter>
    );
}

export default App;
