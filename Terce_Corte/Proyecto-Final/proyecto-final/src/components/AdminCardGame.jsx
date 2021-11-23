import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { gameDelete } from '../actions/games'
import { getRandomImage } from '../helpers/operations'


export const AdminCardGame = (props) => {

    const dispatch = useDispatch()

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

    const handleDelete = () => {
        dispatch(gameDelete(idGame))
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
                <div className="buttons-admin">
                    <button className="btn btn-outline-danger" onClick={handleDelete}><i class="bi bi-trash"></i></button>
                    <button className="btn btn-outline-info"><i class="bi bi-pen"></i></button>
                    <Link to={`/games/${idGame}`}><button className="btn btn-outline-primary"><i class="bi bi-eye"></i></button></Link>
                </div>
            </div>
        </div>
    )
}
