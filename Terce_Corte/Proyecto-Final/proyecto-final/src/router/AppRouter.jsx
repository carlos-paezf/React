import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import PrincipalRouter from './PrincipalRouter'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { login } from '../actions/auth'

const AppRouter = () => {

    const auth = getAuth()
    const dispatch = useDispatch()

    const [log, setLog] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
                setLog(true)
            } else {
                setLog(false)
            }
        })
    }, [auth, dispatch])

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
