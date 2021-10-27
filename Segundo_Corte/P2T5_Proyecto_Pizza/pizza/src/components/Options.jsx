import React from 'react'

const Options = ({ ingrediente }) => {
    return (
        <option value={ingrediente.nombre}>
            {ingrediente.nombre}
        </option>
    )
}

export default Options
