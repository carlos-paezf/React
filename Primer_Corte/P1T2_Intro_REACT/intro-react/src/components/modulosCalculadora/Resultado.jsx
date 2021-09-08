import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({ operacion, resultado }) => {
    return (
        <>
            <span>
                { operacion } = { resultado }
            </span><br />
        </>
    )
}

Resultado.propTypes = {
    operacion: PropTypes.string,
    resultado: PropTypes.number
}

export default Resultado
