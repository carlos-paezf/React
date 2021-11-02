import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRouter = ({ auth, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={
            (props) => auth
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
        } />
    )
}

export default PrivateRouter
