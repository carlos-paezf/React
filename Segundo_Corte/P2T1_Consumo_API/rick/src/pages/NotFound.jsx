import React from 'react'
import { useHistory } from 'react-router'

const NotFound = () => {
    const history = useHistory()
    const handleBack = () => history.goBack()

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">404 - Not Found</h1>
                        <p className="lead text-muted">Error</p>
                        <p>
                            <button onClick={handleBack} className="btn btn-primary my-2">Go Back</button>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound
