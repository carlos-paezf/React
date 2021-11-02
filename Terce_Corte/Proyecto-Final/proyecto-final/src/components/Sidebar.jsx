import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

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
                <i className="bi bi-person"></i>
                <label className="tooltip">User</label>
            </div>
        </aside>
    )
}

export default Sidebar
