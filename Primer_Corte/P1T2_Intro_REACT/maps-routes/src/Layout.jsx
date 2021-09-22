import React from 'react'
import Nav from './components/Nav'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="main">
                <Nav />
            </div>
        </div>
    )
}

export default Layout
