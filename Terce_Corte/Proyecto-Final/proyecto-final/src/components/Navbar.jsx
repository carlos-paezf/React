import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='main'>
            <nav className="nav">
                <Link className="name-logo" to="/">
                    <i className="bi bi-bezier2"></i> FFF
                </Link>

                <input id="search" type="text" placeholder='Search' />
            </nav>
        </div>
    )
}

export default Navbar
