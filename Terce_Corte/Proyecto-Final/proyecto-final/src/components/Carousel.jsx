import React, { useEffect, useRef } from 'react'
import games from '../helpers/games.json'
import { Link } from 'react-router-dom'
import { getRandomImage } from '../helpers/operations'


export const Slide = (props) => {
    const { id, name, genres, screenshot } = props   

    return (
        <div key={ id } className="slide">
            <Link to={ `/games/${id}` } >
                <img src={ screenshot[getRandomImage(0, screenshot.length)] } alt="" />
                <div className="text">
                    <h3 className="genres">{ genres.join(", ") }</h3>
                    <h1 className="name-game">{ name }</h1>
                </div>
            </Link>
        </div>
    )
}



const Carousel = () => {
    const slideshow = useRef(null)
    const intervalSlideshow = useRef(null)

    const prev = () => {
        if (slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1
            const lastElement = slideshow.current.children[index]
            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)
            slideshow.current.style.transition = 'none'
            const slideSize = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${slideSize}px)`
            setTimeout(() => {
                slideshow.current.style.transition = '500ms ease-out all'
                slideshow.current.style.transform = `translateX(0)`
            }, 30);
        }
    }

    const next = () => {
        if (slideshow.current.children.length > 0) {
            const firstElement = slideshow.current.children[0]
            slideshow.current.style.transition = `500ms ease-out all`
            const slideSize = slideshow.current.children[0].offsetWidth
            slideshow.current.style.transform = `translateX(-${slideSize}px)`
            const transition = () => {
                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = 'translateX(0)'
                slideshow.current.appendChild(firstElement)
                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition)
        }
    }

    useEffect(() => {
        intervalSlideshow.current = setInterval(() => {
            next()
        }, 5000)
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalSlideshow.current)
        })
        slideshow.current.addEventListener('mouseleave', () => {
            intervalSlideshow.current = setInterval(() => {
                next()
            }, 5000)
        })

    }, [])

    return (
        <div className="principal animate__animated animate__fadeIn">
            <div className="slideshow" ref={slideshow}>
                {
                    games.games.map(g =>
                        <Slide key={ g.id } {...g} />
                    )
                }
            </div>

            <div className="buttons">
                <div className="prev" onClick={prev}><i className="bi bi-chevron-left"></i></div>
                <div className="next" onClick={next}><i className="bi bi-chevron-right"></i></div>
            </div>

        </div>
    )
}

export default React.memo(Carousel)

// https://www.youtube.com/watch?v=q00ldTrywLU