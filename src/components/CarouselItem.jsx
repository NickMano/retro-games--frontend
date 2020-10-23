import React from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icons8-circled-play-50.png'
import plusIcon from '../assets/static/icons8-add-50.png'
import deleteIcon from '../assets/static/icons8-remove-50.png'


const CarouselItem = props => {
    const {id, cover, title, year, contentRating, duration, isMyList} = props
    
    const handleSetFavorite = () => {
        props.setFavorite(
            {id, cover, title, year, contentRating, duration}
        )
    }

    const handleDeleteFavorite = itemId => {
        props.deleteFavorite(itemId)
    }

    return(
        <div className="carousel-item">
            <img className="carousel-item__image" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play"/>
                    {(isMyList === true)
                    ? <img className="carousel-item__details--img" src={deleteIcon} alt="Delete Icon" onClick={() => handleDeleteFavorite(id)}/>
                    : <img className="carousel-item__details--img" src={plusIcon} alt="Add Icon" onClick={handleSetFavorite}/>}
                </div>
                <p className="carousel-item__details--title"> {title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}min`}
                </p>
            </div>
        </div>
    )
}

const mapDispatchToProps =  {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem)