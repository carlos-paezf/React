import React from 'react'
import Lista from '../components/Lista'
import preparaciones from '../helpers/all.json'
// import preparaciones from '../helpers/preparaciones.json'


const Home = () => {
    return (
        <div>
            <h1>Pizzas</h1>
            <hr />
            <ol>
                {
                    preparaciones.pizzas.map((p) =>
                        <Lista elemento={p} key={p.id} />
                    )
                }
            </ol>
        </div>
    )
}

export default Home
