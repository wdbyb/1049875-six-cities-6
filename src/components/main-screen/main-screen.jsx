import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list.jsx';
import * as types from '../../props/offers.js';
import Map from '../map/map.jsx';
import Locations from '../locations/locations.jsx';
import {connect} from 'react-redux';
import Header from '../header/header.jsx';
import Icons from '../icons/icons.jsx';
import {ActionCreator} from '../../store/action.js';

const MainScreen = (props) => {
  const {offers, city, redirectToLogin, foo} = props;
  const [isPopularOpened, setPopular] = useState(false);

  console.log(offers);

  const handleClickendo = () => {
    foo();
  };

  const handleOpenSort = () => setPopular(!isPopularOpened);

  return (
    <>
      <Icons />

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0" onClick={handleOpenSort}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${isPopularOpened ? `places__options--opened` : ``}`}>
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0" onClick={handleClickendo}>Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <OffersList offers={offers} redirectToLogin={redirectToLogin} />
              </section>
              <div className="cities__right-section">
                <Map />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
  city: PropTypes.string.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.filtredOffers,
  city: state.city
});

const mapDispatchToProps = (dispatch) => ({
  foo() {
    dispatch(ActionCreator.sortOffersPlease());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
