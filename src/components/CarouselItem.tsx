import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icons8-circled-play-50.png'
import plusIcon from '../assets/static/icons8-add-50.png'


const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm1.behance.net%2Frendition%2Fmodules%2F81120883%2Fdisp%2F21bb82db1bc0bfb431106ea5c0b7fd2d.jpg&f=1&nofb=1" alt="Mario" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play"/>
                <img className="carousel-item__details--img" src={plusIcon} alt="Add"/>
            </div>
            <p className="carousel-item__details--title"> Title</p>
            <p className="carousel-item__details--subtitle">Subtitle</p>
        </div>
    </div>
)

export default CarouselItem