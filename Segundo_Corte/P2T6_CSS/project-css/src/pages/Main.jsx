import React from 'react'
import { Button1, Button2 } from '../components/ButtonPersonalizado'

const Main = () => {
    return (
        <div className="container">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Componente Principal</h2>
                <hr />
                <p>Estilos React</p>
                <Button1 color="purple" colorTexto="black"></Button1>
                <Button2></Button2>
            </div>
        </div>
    )
}

export default Main
