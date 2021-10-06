import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const logoURL = "https://raw.githubusercontent.com/LeonidasEsteban/rick-and-morty-react/master/public/images/logo%402x.png"
    return (
        <nav className="navbar navbar-dark">
            <div className="container-fluid justify-content-center">
                <img src={logoURL} alt="" width="350px" className="d-inline-block align-text-top" />
            </div>
            <div className="navigation col-12 col-md-12">
                <div className="asset">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="line" />
                </div>
                <div>
                    <span className="text">
                        <NavLink activeClassName="text-danger" to="/character" style={{textDecoration: "none"}}>Characters</NavLink>
                    </span>
                    <span className="text">
                        <NavLink activeClassName="text-danger" to="/episode" style={{textDecoration: "none"}}>Episodes</NavLink>
                    </span>
                </div>
                <div className="asset">
                    <span className="line" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
