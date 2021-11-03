import React from 'react'
import games from '../helpers/games.json'
import { Link } from 'react-router-dom'


export const CardGame = (props) => {

    const getRandomURL = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    const { id, name, genres, price, url } = props

    return (
        <div className="card-game">
            <img src={url[getRandomURL(0, url.length)]} alt="" />
            <div className="description-game">
                <h3 className="game-name">{name}</h3>
                <small>{genres.join(', ')}</small>
                <p>{price > 0 ? `$${price}` : `Free`}</p>
                <Link to={`/games/${id}`}><button className="btn btn-dark">View more</button></Link>
            </div>
        </div>
    )
}


const CardsGames = () => {
    return (
        <div className="main">
            <div className="games animate__animated animate__fadeIn">
                <h1>List of Games</h1>
                <div className="wrapper-cards">
                    {
                        games.games.map(g => <CardGame key={g.id} {...g} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CardsGames
