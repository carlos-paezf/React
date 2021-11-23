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
import { loadGames, loadGamesOwners, loadUsers } from '../helpers/loadData'
import { userRead } from '../actions/user'
import { gameRead, gameReadByAdmin } from '../actions/games'

const AppRouter = () => {

    const dispatch = useDispatch()

    const [log, setLog] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
                setLog(true)
                const userData = await loadUsers(user.uid)
                const gameByAdmin = await loadGamesOwners(user.uid)
                const gamesData = await loadGames()
                dispatch(userRead(userData))
                dispatch(gameReadByAdmin(gameByAdmin))
                dispatch(gameRead(gamesData))
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
