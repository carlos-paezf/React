import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MiniJumbotron = ({
    title,
    paragraph,
    classComponent,
    withButton = false,
    classButton = '',
    titleButton = '',
    actionOnClick = null,
    withLink = false,
    titleLink = '',
    url = ''
}) => {
    return (
        <div>
            <div className={classComponent}>
                <h2>{title}</h2>
                <p>{paragraph}</p>
                {withButton && <button className={classButton} type="button" onClick={actionOnClick}>{titleButton}</button>}
                {withLink && <Link to={url} className={classButton} type="button">{titleLink}</Link>}
            </div>
        </div>
    )
}

MiniJumbotron.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    classComponent: PropTypes.string,
    withButton: PropTypes.bool,
    classButton: PropTypes.string,
    titleButton: PropTypes.string,
    actionOnClick: PropTypes.func,
    withLink: PropTypes.bool,
    titleLink: PropTypes.string,
    url: PropTypes.string
}

export default MiniJumbotron
