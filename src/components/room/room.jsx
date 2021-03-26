import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../comment-form/comment-form.jsx';
import * as types from '../../props/offers.js';
import {connect} from 'react-redux';
import {RatingStars, AuthStatus, FavoritePostStatus} from '../../const.js';
import Map from '../map/map.jsx';
import {fetchCommentsList, postFavorite} from "../../store/api-actions";
import Header from '../header/header.jsx';
import Icons from '../icons/icons.jsx';


const Room = (props) => {
  const {offers, match, authStatus, redirectToLogin, getCommentsList, onBookmarksClick, currentOfferCommentsList = []} = props;
  const offer = offers.find((item) => item.id === parseInt(match.params.id, 10));
  const starsCount = Math.round(RatingStars.MAX_WIDTH * +offer.rating / RatingStars.MAX_RATING).toString() + `%`;

  if (!offer) {
    return null;
  }

  useEffect(
      () => {
        getCommentsList(offer.id);
      },
      [getCommentsList]
  );

  const handleClickOnBookmarks = () => {
    if (authStatus === AuthStatus.NO_AUTH) {
      redirectToLogin();
    }

    onBookmarksClick(offer.id, FavoritePostStatus.ADD);
  };

  return (
    <>
      <Icons />

      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((image, i) => {
                  if (i > 5) {
                    return false;
                  }

                  return (
                    <div className="property__image-wrapper" key={image + i.toString()}>
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button" onClick={handleClickOnBookmarks}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: starsCount}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good, i) => (
                      <li className="property__inside-item" key={good + i.toString()}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentOfferCommentsList.length}</span></h2>
                  <ul className="reviews__list">
                    {currentOfferCommentsList.map((comment) => {
                      const commentRating = Math.round(RatingStars.MAX_WIDTH * +comment.rating / RatingStars.MAX_RATING).toString() + `%`;

                      return (
                        <li className="reviews__item" key={comment.user.name + comment.id}>
                          <div className="reviews__user user">
                            <div className="reviews__avatar-wrapper user__avatar-wrapper">
                              <img className="reviews__avatar user__avatar" src={comment.user.avatar_url} width="54" height="54" alt="Reviews avatar" />
                            </div>
                            <span className="reviews__user-name">
                              {comment.user.name}
                            </span>
                          </div>
                          <div className="reviews__info">
                            <div className="reviews__rating rating">
                              <div className="reviews__stars rating__stars">
                                <span style={{width: commentRating}}></span>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <p className="reviews__text">
                              {comment.comment}
                            </p>
                            <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  {<CommentForm authStatus={authStatus} offerID={offer.id} />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;80</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Wood and stone place</a>
                    </h2>
                    <p className="place-card__type">Private room</p>
                  </div>
                </article>

                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;132</b>
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
                        <span style={{width: `80%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Canal View Prinsengracht</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>

                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;180</b>
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
                        <span style={{width: `100%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Nice, cozy, warm big bed apartment</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

Room.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  authStatus: PropTypes.string.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  getCommentsList: PropTypes.func.isRequired,
  onBookmarksClick: PropTypes.func.isRequired,
  currentOfferCommentsList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authStatus: state.authStatus,
  currentOfferCommentsList: state.currentOfferCommentsList
});

const mapDispatchToProps = (dispatch) => ({
  getCommentsList(offerID) {
    dispatch(fetchCommentsList(offerID));
  },

  onBookmarksClick(offerID, status) {
    dispatch(postFavorite(offerID, status));
  }
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
