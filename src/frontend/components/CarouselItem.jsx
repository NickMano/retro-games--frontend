import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../images/icons8-circled-play-50.png';
import plusIcon from '../images/icons8-add-50.png';
import deleteIcon from '../images/icons8-remove-50.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, isMyList } = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      { id, cover, title, year, contentRating },
    );
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__image' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={playIcon} alt='Play' />
          </Link>
          {(isMyList === true) ? (
            <img
              className='carousel-item__details--img'
              src={deleteIcon}
              alt='Delete Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Add Icon'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>
          {' '}
          {title}
        </p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  cover: PropTypes.string,
  deleteFavorite: PropTypes.func,
  setFavorite: PropTypes.func,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
