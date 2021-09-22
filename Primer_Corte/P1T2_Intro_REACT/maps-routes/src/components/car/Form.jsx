import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

const Form = ({ dispatch }) => {

    const [data, setData] = useState({
        id: '',
        marca : '',
        color : '',
        nruedas: 0,
        npuertas : 0,
        descripcion : ""
    })

    const { marca, color, nruedas, npuertas, descripcion } = data

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : [e.target.value]
        })
    }

    const handleAdd = () => dispatch(actionAdd)

    const actionAdd = {
        type: 'add',
        payload: {
            id: uuidV4(),
            marca: marca[0],
            color : color[0],
            nruedas: +nruedas[0],
            npuertas: +npuertas[0],
            descripcion: descripcion[0]
        }
    }

    return (
        <div>
            <div className="mx-3">
                <h3 className="mb-3">Registrar un nuevo Vehículo</h3>
                <div className="mb-3">
                    <label className="form-label">Marca del Vehiculo</label>
                    <input type="text" className="form-control" id="marca" name="marca" value={marca} onChange={handleChange} placeholder="Nombre del Vehiculo" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Color</label>
                    <input type="text" className="form-control" id="color" name="color" value={color} onChange={handleChange} placeholder="Color" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad de Ruedas</label>
                    <input type="number" className="form-control" id="nruedas" name="nruedas" value={nruedas} onChange={handleChange} placeholder="Cantidad de Ruedas" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad de Puertas</label>
                    <input type="number" className="form-control" id="npuertas" name="npuertas" value={npuertas} onChange={handleChange} placeholder="Cantidad de Puertas" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción General</label>
                    <textarea className="form-control" id="descripcion" name="descripcion" value={descripcion} rows="3" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <button className="w-100 btn btn-outline-success" onClick={handleAdd}>Registrar auto</button>
                </div>
            </div>
        </div>
    )
}

export default Form
