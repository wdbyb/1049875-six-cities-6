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
  const {offers, city, redirectToLogin, onHighToLow, onLowToHigh, onTopRated, onPopular} = props;
  const [isPopularOpened, setPopular] = useState(false);
  const [sortType, setSortType] = useState({
    isPopular: true,
    isLowToHigh: false,
    isHighToLow: false,
    isTopRated: false,
    currentSort: `Popular`,
  });

  const handleClickOnPopular = () => {
    setSortType(() => ({
      isLowToHigh: false,
      isHighToLow: false,
      isTopRated: false,
      isPopular: true,
      currentSort: `Popular`
    }));
    onPopular();
  };

  const handleClickOnLowToHigh = () => {
    setSortType(() => ({
      isPopular: false,
      isLowToHigh: true,
      isHighToLow: false,
      isTopRated: false,
      currentSort: `Price: low to high`
    }));
    onLowToHigh();
  };

  const handleClickOnHighToLow = () => {
    setSortType(() => ({
      isPopular: false,
      isLowToHigh: false,
      isHighToLow: true,
      isTopRated: false,
      currentSort: `Price: high to low`
    }));
    onHighToLow();
  };

  const handleClickOnTopRated = () => {
    setSortType(() => ({
      isPopular: false,
      isLowToHigh: false,
      isHighToLow: false,
      isTopRated: true,
      currentSort: `Top rated first`
    }));
    onTopRated();
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
                  <span className="places__sorting-caption" onClick={handleOpenSort}>Sort by</span>
                  <span className="places__sorting-type" tabIndex="0" onClick={handleOpenSort}>
                    {sortType.currentSort}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${isPopularOpened ? `places__options--opened` : ``}`}>
                    <li className={`places__option ${sortType.isPopular ? `places__option--active` : ``}`} tabIndex="0" onClick={handleClickOnPopular}>Popular</li>
                    <li className={`places__option ${sortType.isLowToHigh ? `places__option--active` : ``}`} tabIndex="0" onClick={handleClickOnLowToHigh}>Price: low to high</li>
                    <li className={`places__option ${sortType.isHighToLow ? `places__option--active` : ``}`} tabIndex="0" onClick={handleClickOnHighToLow}>Price: high to low</li>
                    <li className={`places__option ${sortType.isTopRated ? `places__option--active` : ``}`} tabIndex="0" onClick={handleClickOnTopRated}>Top rated first</li>
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
  onHighToLow: PropTypes.func.isRequired,
  onPopular: PropTypes.func.isRequired,
  onLowToHigh: PropTypes.func.isRequired,
  onTopRated: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.filtredOffers,
  city: state.city
});

const mapDispatchToProps = (dispatch) => ({
  onHighToLow() {
    dispatch(ActionCreator.sortOffersHigh());
  },
  onPopular() {
    dispatch(ActionCreator.sortOffersPopular());
  },
  onLowToHigh() {
    dispatch(ActionCreator.sortOffersLow());
  },
  onTopRated() {
    dispatch(ActionCreator.sortOffersTopRated());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
