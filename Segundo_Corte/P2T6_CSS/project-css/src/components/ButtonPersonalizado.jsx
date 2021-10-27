import React from 'react'
import {Button} from 'react-bootstrap'

export const Button1 = (props) => {
    const styles = {
        backgroundColor: props.color,
        color: props.colorTexto,
        width: props.width
    }

    return (
        <Button className="btn btn-danger" style={styles}>Botón 1</Button>
    )
}

export const Button2 = () => {
    return (
        <button className="btn btn-primary">Botón 2</button>
    )
}
