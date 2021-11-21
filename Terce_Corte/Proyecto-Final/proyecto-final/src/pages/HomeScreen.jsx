import React from 'react'
import CardsNews from '../components/CardsNews'
// import Carousel from '../components/Carousel'

const HomeScreen = ({ history }) => {
    // const location = history.location.pathname

    return (
        <div className="main">
            {/* {
                location === '/home' 
                && <Carousel />
            } */}
                {/* <Carousel /> */}
            <CardsNews />
        </div>
    )
}

export default HomeScreen
