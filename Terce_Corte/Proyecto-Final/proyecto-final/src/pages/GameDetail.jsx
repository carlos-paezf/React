import React from 'react'
import { useParams } from 'react-router'
import games from '../helpers/games.json'

export const Tags = ({ genre }) => {
    return (
        <div className="tag">
            <i className="bi bi-tag"></i>
            {genre}
        </div>
    )
}


const GameDetail = ({ history }) => {
    const { idGame } = useParams()

    const getRandomURL = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    const { name, genres, price, minimum_requirements, recommended_requirements, url } = games.games.find(g => g.id === parseInt(idGame))

    console.log(minimum_requirements);

    return (
        <div className="game-detail">
            <div className="b-game">
                <div className="h-game">
                    <img className="h-b-image animate__animated animate__fadeInLeft" src={url[getRandomURL(0, url.length)]} alt="" />
                    <div className="h-content">
                        <h1>{name}</h1>
                        <section className="tags">
                            {
                                genres.map((g, i) => <Tags key={i} genre={g} />)
                            }
                        </section>
                    </div>
                </div>
            </div>
            <div className="c-game">
                <div className="json">
                    <h3>Some Screenshots</h3>
                    <div className="g-images">
                        {
                            url.map((g, i) => <img className="c-image-game" src={g} key={i} alt={i} />)
                        }
                    </div>
                    <div className="min-req">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th colSpan="2">Minimum Requirements</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Processor</th>
                                    <th>{minimum_requirements.processor}</th>
                                </tr>
                                <tr>
                                    <th>OS</th>
                                    <th>{minimum_requirements.os}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{minimum_requirements.ram}</th>
                                </tr>
                                <tr>
                                    <th>GPU</th>
                                    <th>{minimum_requirements.gpu}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="rec-req">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th colSpan="2">Recommended Requirements</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Processor</th>
                                    <th>{recommended_requirements.processor}</th>
                                </tr>
                                <tr>
                                    <th>OS</th>
                                    <th>{recommended_requirements.os}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{recommended_requirements.ram}</th>
                                </tr>
                                <tr>
                                    <th>GPU</th>
                                    <th>{recommended_requirements.gpu}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div >
                    <div className="buy-zone">

                        <div className="price">
                            <h3>{price > 0 ? `${price} US$` : `Free Product`}</h3>
                        </div>
                        <div className="buttons-buy">
                            <button className="btn add-cart">Add to Cart</button>
                            <button className="btn fav">
                                <i className="bi bi-heart-fill"></i>
                            </button>
                            <button className="btn buy w-100">Buy now</button>
                            <p className="guarantee">30 day money back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GameDetail
