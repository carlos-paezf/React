import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRandomImage } from '../helpers/operations'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export const CardGame = (props) => {

    const { idGame, name, genres, price, discount_percent, discount_date, size_mb, screenshotURLs } = props

    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(i => i.concat(screenshotURLs && screenshotURLs.split(', ')))
    }, [screenshotURLs])


    const dayDiscount = new Date(discount_date)
    const dayToday = new Date()

    const applyDiscount = () => {
        let newPrice

        if (dayDiscount > dayToday) {
            if (price > 0) {
                newPrice = price - ((price * discount_percent) / 100)
            } else {
                newPrice = price
            }
        } else {
            newPrice = price
        }
        return newPrice
    }

    return (
        <div className="card-game">
            <img src={images[getRandomImage(0, images.length)]} alt="" />
            <div className="description-game">
                <h3 className="game-name">{name}</h3>
                <small>{genres}</small>
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
                <Link to={`/games/${idGame}`}><button className="btn btn-dark">View more</button></Link>
            </div>
        </div>
    )
}


const CardsGames = () => {

    // const gamesData = useSelector(state => state.games.gamesData)
    const gamesData = useSelector(state => state.games.gameData)
    
    return (
        <div className="main">
            <div className="games animate__animated animate__fadeIn">
                <h1>List of Games</h1>
                <div className="wrapper-cards">
                    {
                        // games.games.map(g => <CardGame key={g.id} {...g} />)
                        gamesData.map((g, i) => <CardGame key={i} {...g} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CardsGames
