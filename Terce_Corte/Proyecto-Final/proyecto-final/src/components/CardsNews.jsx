import React from 'react'
import news from '../utils/news.json'

export const CardNew = (props) => {
    const { title, content, author, images } = props

    const randomImage = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }
    
    return (
        <div className="card-new animate__animated animate__fadeInUp">
            <img className="b-image" src={ images[randomImage(0, images.length)] } alt="" />
            <article className="body-new">
                <h3 className="title">{ title }</h3>
                <p className="content">{ content }</p>
                <p className="author">{ author }</p>
            </article>
        </div>
    )
}


const CardsNews = () => {
    return (
        <div className="news">
            <h1>Game News</h1>
            <div className="cards">
                {
                    news.news.map(n => <CardNew key={ n.id } {...n} />)
                }
            </div>
        </div>
    )
}

export default CardsNews
