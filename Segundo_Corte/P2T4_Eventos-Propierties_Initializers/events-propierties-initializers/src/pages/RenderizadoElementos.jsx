import React, { Component } from 'react'
import data from "../helpers/data.json"


function ElementosListaES6(props) {
    return (
        <li>
            <a href={props.elementParam.web} target="_blank" rel="noreferrer">
                {
                    props.elementParam.name
                }
            </a>
        </li>
    )
}


const ElementosListaES7 = (props) => {
    return (
        <li>
            <a href={props.elementParam.web} target="_blank" rel="noreferrer">
                {
                    props.elementParam.name
                }
            </a>
        </li>
    )
}


export class RenderizadoElementosES6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seasons: [
                'Invierno',
                'Primavera',
                'Verano',
                'Otoño'
            ]
        }
    }

    render() {
        console.log(data)
        return (
            <div>
                <h2>Renderizado de elementos Ecma Script 6</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((s, i) =>
                            <li key={i}>{s}</li>
                        )
                    }
                </ol>
                <h3>Frameworks Frontend</h3>
                <ol>
                    {
                        data.frameworks.map((f) =>
                            <ElementosListaES6 elementParam={f} key={f.id} />
                        )
                    }
                </ol>
            </div>
        )
    }
}


export class RenderizadoElementosES7 extends Component {

    state = {
        seasons: [
            'Invierno',
            'Primavera',
            'Verano',
            'Otoño'
        ]
    }

    render() {
        console.log(data)
        return (
            <div>
                <h2>Renderizad de elementos con Ecma Script 7</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((s, i) =>
                            <li key={i}>{s}</li>
                        )
                    }
                </ol>
                <h3>Frameworks Frontend</h3>
                <ol>
                    {
                        data.frameworks.map((f) =>
                            <ElementosListaES7 elementParam={f} key={f.id} />
                        )
                    }
                </ol>
            </div>
        )
    }
}