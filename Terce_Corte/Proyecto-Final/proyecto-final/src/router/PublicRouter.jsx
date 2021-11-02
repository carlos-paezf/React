import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRouter = ({ auth, component: Component, ...rest}) => {
    return (
        <Route {...rest} component={
            (props) => auth
                ? <Redirect to="/home" />
                : <Component {...props} />
        } />
    )
}

export default PublicRouter
