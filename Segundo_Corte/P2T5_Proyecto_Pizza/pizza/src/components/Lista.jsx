import React from 'react'
import Options from './Options';

const Lista = ({ elemento }) => {
    const pizza = elemento.nombre
    const ingredientes = elemento.ingredientes


    return (
        <li style={{margin: "10px"}}>
            {pizza}
            <select style={{margin: "0 20px"}} name="ingredientes" id="ingredientes">
                {
                    ingredientes.map(ingrediente => 
                        <Options ingrediente={ingrediente} key={ingrediente.id}/>
                    )
                }
            </select>
        </li>
    )
}

export default Lista
