import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'
import PrincipalRouter from './PrincipalRouter'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from '@firebase/auth'
import { login } from '../actions/auth'
import { auth } from '../firebase/config'
import LoadingScreen from '../pages/LoadingScreen'

const AppRouter = () => {

    const dispatch = useDispatch()

    const [log, setLog] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
                setLog(true)
                setLoading(false)
            } else {
                setLog(false)
                setLoading(false)
            }
        })
    }, [dispatch])

    return (
        <>
            {
                loading
                    ? <LoadingScreen />
                    : <Router>
                        <Switch>
                            <PublicRouter path="/auth" auth={log} component={AuthRouter} />
                            <PrivateRouter path="/" auth={log} component={PrincipalRouter} />
                        </Switch>
                    </Router>
            }
        </>
    )
}

export default AppRouter
