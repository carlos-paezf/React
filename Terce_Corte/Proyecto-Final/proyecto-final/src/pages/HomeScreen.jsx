import React from 'react'
import Carousel from '../components/Carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const HomeScreen = () => {
    return (
        <div>
            {/* <Carousel autoPlay="true" infiniteLoop="true" width="100%">
            <div className="slide">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
                <h1 class="text">Titulo 1</h1>
                <h3 className="genres">Rol, Video</h3>
            </div>
            <div className="slide">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
                <h1 class="text">Titulo 12</h1>
                <h3 className="genres">Rol, Video</h3>
            </div>
            </Carousel> */}
            <Carousel />
        </div>
    )
}

export default HomeScreen
