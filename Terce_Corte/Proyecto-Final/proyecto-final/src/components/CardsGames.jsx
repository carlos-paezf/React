import React from 'react'
import games from '../helpers/games.json'
import { Link } from 'react-router-dom'
import { getRandomImage } from '../helpers/operations'


export const CardGame = (props) => {

    const { id, name, genres, price, discount_percent, size_mb, screenshot } = props

    const applyDiscount = () => {
        let newPrice;
        if (price > 0) {
            newPrice = price - ((price * discount_percent) / 100)
        } else {
            newPrice = price
        }

        return newPrice
    }

    return (
        <div className="card-game">
            <img src={screenshot[getRandomImage(0, screenshot.length)]} alt="" />
            <div className="description-game">
                <h3 className="game-name">{name}</h3>
                <small>{genres.join(', ')}</small>
                <p id="price">
                    {
                        price > 0
                            ? (discount_percent > 0
                                ? `${applyDiscount()} US$`
                                : `${price} US$`)
                            : `Free Product`
                    }
                </p>
                <p id="size">{(size_mb / 1024).toFixed(2)} GB</p>
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
