import React from 'react'
import PropTypes from 'prop-types'

const RedSocial = ({ nombre, logo, url}) => {
    return (
        <div className="text-center">
            <i className={ logo } style={{fontSize: "75px"}} />
            <h3>{ nombre }</h3>
            <a href="http://" target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
    )
}

RedSocial.propTypes = {
    nombre: PropTypes.string,
    logo: PropTypes.string,
    url: PropTypes.string
}

export default RedSocial
