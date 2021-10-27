import React from 'react'
import { EventosES6, EventosES7 } from '../events/Eventos'
import { RenderizadoCondicionalES6, RenderizadoCondicionalES7 } from '../events/RenderizadoCondicional'
import { RenderizadoElementosES6, RenderizadoElementosES7 } from './RenderizadoElementos'

function Home() {
    return (
        <div>
            <EventosES6 />
            <EventosES7 />
            <hr />
            <RenderizadoCondicionalES6 />
            <RenderizadoCondicionalES7 />
            <hr />
            <RenderizadoElementosES6 />
            <RenderizadoElementosES7 />
        </div>
    )
}

export default Home
