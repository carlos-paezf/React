import React, { useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import PrincipalRouter from './PrincipalRouter'

const AppRouter = () => {

    const [log, setLog] = useState(true)

    return (
        <Router>
            <Switch>
                <PublicRouter path="/auth" auth={log} component={AuthRouter} />
                <PrivateRouter path="/" auth={log} component={PrincipalRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter
