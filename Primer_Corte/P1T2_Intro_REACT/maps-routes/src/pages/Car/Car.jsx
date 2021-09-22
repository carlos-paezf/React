import React, { useEffect, useReducer } from 'react'
import Header from '../../components/estructura/Header'
import Form from '../../components/car/Form'
import List from '../../components/car/List'
import { CarsReducer } from '../../reducers/CarsReducer'
import { carData } from '../../helpers/carData'

const Car = () => {
    /* const init = () => {
        const carros = localStorage.getItem('carros')
        return carros ? JSON.parse(carros) : []
    } */

    const [state, dispatch] = useReducer(CarsReducer, carData)
    // const [state, dispatch] = useReducer(CarsReducer, carData, init)

    /* useEffect(() => {
        localStorage.setItem('carros', JSON.stringify(state))
    }, [state]) */

    return (
        <>
            <Header title={"Registrar un Vehiculo"} />

            <div className="row" style={{overflowX: 'hidden'}}>
                <div className="col-sm-8">
                    <List carros={state} dispatch={dispatch} />
                </div>
                <div className="col-md-4">
                    <Form dispatch={dispatch} />
                </div>
            </div>
        </>
    )
}

export default Car