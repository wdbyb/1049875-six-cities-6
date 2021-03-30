import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import * as types from '../../props/offers.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchFavoriteList} from "../../store/api-actions";
import Header from '../header/header.jsx';
import Icons from '../icons/icons.jsx';

const getUniqCities = (offersList) => {
  const cities = offersList.map((item) => item.city.name);

  return [...new Set(cities)];
};

const Favorites = (props) => {
  const {getFavorite, favoriteOffers = []} = props;
  const uniqCities = getUniqCities(favoriteOffers);

  useEffect(
      () => {
        getFavorite();
      },
      [getFavorite]
  );

  return (
    <>
      <Icons />

      <div className="page">
        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {uniqCities.map((city, i) => (
                  <li className="favorites__locations-items" key={city + i}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoriteOffers.map((offer) => {
                        if (offer.city.name === city) {
                          return (
                            <article className="favorites__card place-card" key={offer.id}>
                              <div className="favorites__image-wrapper place-card__image-wrapper">
                                <Link href="#" to={`offer/${offer.id}`}>
                                  <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
                                </Link>
                              </div>
                              <div className="favorites__card-info place-card__info">
                                <div className="place-card__price-wrapper">
                                  <div className="place-card__price">
                                    <b className="place-card__price-value">&euro;{offer.price}</b>
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
                                    <span style={{width: `100%`}}></span>
                                    <span className="visually-hidden">Rating</span>
                                  </div>
                                </div>
                                <h2 className="place-card__name">
                                  <Link href="#" to={`offer/${offer.id}`}>{offer.title}</Link>
                                </h2>
                                <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
                              </div>
                            </article>
                          );
                        }
                        return false;
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" href="main.html" to="/">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    </>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(types.offer),
  getFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  favoriteOffers: state.favoriteOffers
});

const mapDispatchToProps = (dispatch) => ({
  getFavorite() {
    dispatch(fetchFavoriteList());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
