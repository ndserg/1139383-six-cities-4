import React from 'react';
import PropTypes from 'prop-types';

const premiumMarkup = () => {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
};

const Card = (props) => {
  const {offer, onHeaderClick, onMouseOverCard} = props;
  const {
    premiumLabel,
    inBookmarks,
    rating,
    image,
    price,
    priceText,
    placeName,
    placeType
  } = offer;

  const ratingStyle = rating + `%`;
  const premium = premiumLabel === true ? premiumMarkup() : ``;
  const bookmarkClass = inBookmarks === true ? `place-card__bookmark-button button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;


  return (
    <article className="cities__place-card place-card"
      onMouseOver={() => {
        onMouseOverCard(offer);
      }}>
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStyle}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 onClick={onHeaderClick} className="place-card__name">
          <a href="#">{placeName}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    premiumLabel: PropTypes.bool.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    placeType: PropTypes.string.isRequired
  }).isRequired,

  onHeaderClick: PropTypes.func.isRequired,
  onMouseOverCard: PropTypes.func.isRequired
};

export default Card;
