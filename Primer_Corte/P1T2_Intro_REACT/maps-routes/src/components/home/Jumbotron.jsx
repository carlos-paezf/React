import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({ title, paragraph, classComponent }) => {
    return (
        <div>
            <div className={classComponent}>
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">{title}</h1>
                        <p className="col-md-8 fs-4">{paragraph}</p>
                    </div>
                </div>
        </div>
    )
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    classComponent: PropTypes.string
}

export default Jumbotron
