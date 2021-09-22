import React, { Component } from "react"

export default class Eventos extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
        this.handleRestar = this.handleRestar.bind(this)
    }

    // La solucíón del arrow function es actual, por lo que no aplica a la estructura
    // que se aplicaba para componentes antiguos de REACT
    handleSumar = () => {
        this.setState({ contador: this.state.contador + 1 })
    }

    // Para que este tipo de funciones actuen, debemos darles un bind dentro del constructor
    handleRestar(_e) {
        this.setState({ contador: this.state.contador - 1 })
    }

    render(){
        return (
            <div className="container-fluid m-5">
                <h2>Eventos con componentes de class</h2>
                <div className="col-md-6">
                    <h4>{ this.state.contador }</h4>
                    <button className="btn btn-outline-warning" onClick={this.handleSumar}>
                        Aumentar
                    </button>
                    <button className="btn btn-outline-danger mx-3" onClick={this.handleRestar}>
                        Restar
                    </button>
                </div>
            </div>
        )
    }
}