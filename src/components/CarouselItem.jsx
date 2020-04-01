import React from 'react'
import { connect } from 'react-redux'
import { setFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icons8-circled-play-50.png'
import plusIcon from '../assets/static/icons8-add-50.png'


const CarouselItem = props => {
    const {cover, title, year, contentRating, duration} = props
    const handleSetFavorite = () => {
        props.setFavorite(
            {cover, title, year, contentRating, duration}
        )
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__image" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play"/>
                    <img className="carousel-item__details--img" src={plusIcon} alt="Add" onClick={handleSetFavorite}/>
                </div>
                <p className="carousel-item__details--title"> {title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}min`}
                </p>
            </div>
        </div>
    )
}

const mapDispachToProps =  {
    setFavorite
}

export default connect(null, mapDispachToProps)(CarouselItem)