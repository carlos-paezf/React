import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import games from '../utils/games.json'
import { getRandomImage } from '../helpers/operations'
import { useSelector } from 'react-redux'


export const Tags = ({ genre }) => {
    return (
        <div className="tag">
            <i className="bi bi-tag"></i>
            {genre}
        </div>
    )
}



export const TableRequirements = ({ bcolor, name, processor, os, ram, gpu }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="2" style={{ backgroundColor: bcolor }}>{name}</th>
                </tr>
                <tr>
                    <th colSpan="2">Specification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="th-comp">Processor</th>
                    <th>{processor}</th>
                </tr>
                <tr>
                    <th className="th-comp">OS</th>
                    <th>{os}</th>
                </tr>
                <tr>
                    <th className="th-comp">Ram</th>
                    <th>{ram}</th>
                </tr>
                <tr>
                    <th className="th-comp">GPU</th>
                    <th>{gpu}</th>
                </tr>
            </tbody>
        </table>
    )
}



const GameDetail = ({ history }) => {
    const { idGame } = useParams()

    const gamesData = useSelector(state => state.games.gameData)

    // const { name, genres, price, size_mb, version, release_date, description, developer, editor, classification_esrb, discount_percent, minimum_requirements, recommended_requirements, screenshot } = games.games.find(g => g.id === parseInt(idGame))
    const { name, genres, price, size_mb, version, release_date, description, developer, editor, classification_esrb, discount_percent, discount_date, minimumRequirements, recommendedRequirements, screenshotURLs } = gamesData.find(g => g.idGame === idGame)

    const [images, setImages] = useState([])
    const [genresArray, setGenresArray] = useState([])

    useEffect(() => {
        setImages(i => i.concat(screenshotURLs && screenshotURLs.split(', ')))
        setGenresArray(i => i.concat(genres && genres.split(', ')))
    }, [idGame, screenshotURLs, genres])


    const [index, setIndex] = useState(0)

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

    const handleBack = () => {
        history.goBack()
    }

    const handlePrev = () => {
        setIndex(i => i - 1)
        if (index === 0) {
            setIndex(images.length - 1)
        }
    }

    const handleNext = () => {
        setIndex(i => i + 1)
        if (index === images.length - 1) {
            setIndex(0)
        }
    }

    const { m_processor, m_os, m_ram, m_gpu } = minimumRequirements
    const { r_processor, r_os, r_ram, r_gpu } = recommendedRequirements

    return (
        <div className="game-detail">
            <div className="b-game">
                <div className="h-game">
                    <img className="h-b-image animate__animated animate__fadeInLeft" src={images[getRandomImage(0, images.length)]} alt="" />
                    <div className="h-content">
                        <label className="go-back" onClick={handleBack}><i className="bi bi-arrow-left"></i> Go back</label>
                        <h1>{name}</h1>
                        <section className="tags">
                            {
                                genresArray.map((g, i) => <Tags key={i} genre={g} />)
                            }
                        </section>
                    </div>
                </div>
            </div>

            <div className="c-game">
                <div className="json">
                    <h3>Description</h3>
                    <p>{description}</p>

                    <h4 className="subtitle">Release Date</h4>
                    <p>{release_date}</p>

                    <h4 className="subtitle">Version</h4>
                    <p>{version}</p>

                    <h4 className="subtitle">Size in GigaByte (GB)</h4>
                    <p>{(size_mb / 1024).toFixed(2)} GB</p>

                    <h4 className="subtitle">Some Screenshots</h4>

                    <div className="c-g-images">
                        <div className="i-prev"><i className="bi bi-chevron-left" onClick={handlePrev}></i></div>
                        <img className="animate__animated animate__fadeIn" src={images[index]} alt="" />
                        <div className="i-next"><i className="bi bi-chevron-right" onClick={handleNext}></i></div>
                    </div>

                    <div className="min-req">
                        <TableRequirements name={"Minimum Requirements"} bcolor={`rgba(165, 5, 5, 0.5)`} processor={m_processor} os={m_os} ram={m_ram} gpu={m_gpu} />
                    </div>

                    <div className="rec-req">
                        <TableRequirements name={"Recommended Requirements"} bcolor={`rgba(4, 160, 30, 0.5)`} processor={r_processor} os={r_os} ram={r_ram} gpu={r_gpu} />
                    </div>
                </div>

                <div>
                    <div className="buy-zone">
                        <div className="price">
                            <h2 className="new-price animate__animated animate__flash">
                                {
                                    price > 0
                                        ? (discount_percent > 0 && dayDiscount > dayToday
                                            ? `${applyDiscount()} US$`
                                            : `${price} US$`)
                                        : `Free Product`
                                }
                            </h2>
                            <h6 className="original-price animate__animated animate__pulse">
                                {
                                    (price > 0 && discount_percent > 0 && dayDiscount > dayToday)
                                        ? `${price} US$`
                                        : ``
                                }
                            </h6>
                        </div>
                        {
                            (price > 0 && discount_percent > 0 && dayDiscount > dayToday)
                                ? <div className="discount-display">
                                    <p className="discount-value">{`${discount_percent}% Off`}</p>
                                    <p className="discount-date"><i className="bi bi-clock-history"></i> This offert ends in <b>{dayDiscount.getDay() - dayToday.getDay()} day</b>!</p>
                                </div>
                                : ``
                        }
                        <div className="buttons-buy">
                            <button className="btn add-cart">Add to Cart</button>
                            <button className="btn fav">
                                <i className="bi bi-heart-fill"></i>
                            </button>
                            <button className="btn buy w-100">Buy now</button>
                            <p className="guarantee">30 day money back guarantee</p>
                        </div>
                    </div>

                    <div className="features">
                        <p><i>Name:</i> {name}</p>
                        <p><i>Genres:</i> {genres}</p>
                        <p><i>Release Date:</i> {release_date}</p>
                        <p><i>Version:</i> {version}</p>
                        <p><i>Developer:</i> {developer}</p>
                        <p><i>Editor:</i> {editor}</p>
                        <p><i>Classification ESRB:</i> {classification_esrb}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GameDetail
