import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'

const Sidebar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <aside className="sidebar">
            <div className="logo">
                <i className="bi bi-bezier2"></i>
            </div>
            <ul className="options">
                <li>
                    <NavLink to="/home" className="option" activeClassName="active-option">
                        <label className="tooltip">Home</label>
                        <i className="bi bi-house"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/games" className="option" activeClassName="active-option">
                        <label className="tooltip">Games</label>
                        <i className="bi bi-controller"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop" className="option" activeClassName="active-option">
                        <label className="tooltip">Shop</label>
                        <i className="bi bi-bag"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" className="option" activeClassName="active-option">
                        <label className="tooltip">Stadistics</label>
                        <i className="bi bi-speedometer2"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className="option" activeClassName="active-option">
                        <label className="tooltip">Settings</label>
                        <i className="bi bi-sliders"></i>
                    </NavLink>
                </li>
            </ul>
            <div className="user">
                <div className="user-link">
                    <NavLink to="/user/config" activeClassName="active-option">
                        <i className="bi bi-person"></i>
                    </NavLink>
                    <div className="tooltip-user">
                        <ul className="user-menu">
                            <li>Shopping cart</li>
                            <li>Favorites</li>
                        </ul>
                        <ul className="user-menu">
                            <li>Payment methods</li>
                            <li>Shopping history</li>
                        </ul>
                        <ul className="user-menu">
                            <li><Link to="/user/config" className='url-user'>Edit profile</Link></li>
                        </ul>
                        <ul className="user-menu">
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
