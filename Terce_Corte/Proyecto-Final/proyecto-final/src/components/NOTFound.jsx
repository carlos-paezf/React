import React from 'react'
import { Link } from 'react-router-dom'

const NOTFound = () => {
    return (
        <div className="main">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className='title-logo'><i className="bi bi-bezier2"></i>FFF</h1>
                <h1 className="display-5 fw-bold">404 - Page Not Found</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">It is possible that the page you are looking for is under maintenance or is no longer available</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/home" className="btn btn-outline-secondary btn-lg px-4">Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NOTFound