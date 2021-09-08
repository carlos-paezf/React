import React, { useState } from 'react'
import { helper } from '../../helpers/operaciones'
import Resultado from './Resultado'

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        n1: 0,
        n2: 0
    })

    const { handleChange, operacion, n1, n2 } = helper(numeros, setNumeros)

    return (
        <>
            <label>
                Número 1: <input type="number" value={n1} name="n1" id="n1" onChange={handleChange} />
            </label><br />
            <label>
                Número 2: <input type="number" value={n2} name="n2" id="n2" onChange={handleChange} />
            </label><br />

            <Resultado operacion="Suma" resultado={operacion("+")} />
            <Resultado operacion="Resta" resultado={operacion("-")} />
            <Resultado operacion="Multiplicación" resultado={operacion("*")} />
            <Resultado operacion="División" resultado={operacion("/")} />
        </>
    )
}

export default NumberInput
