import React from 'react';
import {Link} from 'react-router-dom';
import * as types from '../../props/offers.js';
import {RatingStars} from '../../const.js';
import {connect} from 'react-redux';
import {fetchCommentsList} from "../../store/api-actions";

const Card = (props) => {
  const {offer, getCommentsList} = props;
  const starsCount = Math.round(RatingStars.MAX_WIDTH * +offer.rating / RatingStars.MAX_RATING).toString() + `%`;

  const handleClick = () => {
    getCommentsList(offer.id);
  };

  return (
    <>
      <article className="cities__place-card place-card">
        {offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${offer.id}`} onClick={handleClick}>
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: starsCount}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>
              {offer.title}
            </Link>
          </h2>
          <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
        </div>
      </article>
    </>
  );
};

Card.propTypes = {
  offer: types.offer,
};

const mapDispatchToProps = (dispatch) => ({
  getCommentsList(offerID) {
    dispatch(fetchCommentsList(offerID));
  }
});

export {Card};
export default connect(null, mapDispatchToProps)(Card);
