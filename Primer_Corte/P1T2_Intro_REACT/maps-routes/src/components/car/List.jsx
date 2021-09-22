import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ carros, dispatch }) => {

    const handleDelete = (id) => {
        const actionDelete = {
            type: 'delete',
            payload: id
        }
        dispatch(actionDelete)
    }

    return (
        <div>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Marca</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Ver más</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carros.map(car => {
                                const finalID = car.id.split('-')
                                return (
                                    <tr key={car.id}>
                                        <th scope="row">{finalID[0]}</th>
                                        <td>{car.marca}</td>
                                        <td>{car.descripcion}</td>
                                        <td>
                                            <Link to={"car-q=" + car.id}>
                                                <i className="bi bi-arrows-fullscreen" />
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(car.id)}>
                                                Eliminar &nbsp;
                                                <i className="bi bi-trash text-danger" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List
