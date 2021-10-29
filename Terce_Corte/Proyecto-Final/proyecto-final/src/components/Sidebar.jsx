import React from 'react'

const Sidebar = () => {
    return (
        <aside className="sidebar animate__animated animate__zoomIn">
            <div className="logo">
                <i className="bi bi-bezier2"></i>
            </div>
            <ul className="options">
                <li>
                    <div className="option active">
                        <label className="tooltip">Home</label>
                        <i className="bi bi-house"></i>
                    </div>
                </li>
                <li>
                    <div className="option">
                        <label className="tooltip">Games</label>
                        <i className="bi bi-controller"></i>
                    </div>
                </li>
                <li>
                    <div className="option">
                        <label className="tooltip">Shop</label>
                        <i className="bi bi-bag"></i>
                    </div>
                </li>
                <li>
                    <div className="option">
                        <label className="tooltip">Stadistics</label>
                        <i className="bi bi-speedometer2"></i>
                    </div>
                </li>
                <li>
                    <div className="option">
                        <label className="tooltip">Settings</label>
                        <i className="bi bi-sliders"></i>
                    </div>
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
