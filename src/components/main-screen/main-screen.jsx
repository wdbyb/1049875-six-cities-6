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
import {SortTypesKey} from '../../const.js';

const MainScreen = (props) => {
  const {offers, city, redirectToLogin, onChangeSortType, sortTypeActive} = props;
  const [isPopularOpened, setPopular] = useState(false);

  const handleChangeSortType = (evt) => {
    onChangeSortType(evt.target.textContent);
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
                    {sortTypeActive}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${isPopularOpened ? `places__options--opened` : ``}`}>
                    <li className={`places__option ${sortTypeActive === SortTypesKey.POPULAR ? `places__option--active` : ``}`} tabIndex="0" onClick={handleChangeSortType}>{SortTypesKey.POPULAR}</li>
                    <li className={`places__option ${sortTypeActive === SortTypesKey.LOW_TO_HIGH ? `places__option--active` : ``}`} tabIndex="0" onClick={handleChangeSortType}>{SortTypesKey.LOW_TO_HIGH}</li>
                    <li className={`places__option ${sortTypeActive === SortTypesKey.HIGH_TO_LOW ? `places__option--active` : ``}`} tabIndex="0" onClick={handleChangeSortType}>{SortTypesKey.HIGH_TO_LOW}</li>
                    <li className={`places__option ${sortTypeActive === SortTypesKey.TOP_RATED ? `places__option--active` : ``}`} tabIndex="0" onClick={handleChangeSortType}>{SortTypesKey.TOP_RATED}</li>
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
  onChangeSortType: PropTypes.func.isRequired,
  sortTypeActive: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.filteredOffers,
  city: state.city,
  sortTypeActive: state.sortTypeActive,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortType(sortValue) {
    dispatch(ActionCreator.sortOffers(sortValue));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
