import React from 'react'
import { EventosES6, EventosES7 } from '../events/Eventos'
import RenderizadoCondicional from '../events/RenderizadoCondicional'

function Home() {
    return (
        <div>
            <EventosES6 />
            <EventosES7 />
            <hr />
            <RenderizadoCondicional />
        </div>
    )
}

export default Home
