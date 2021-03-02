import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as types from '../../props/offers.js';
import {ActionCreator} from '../../store/actions.js';

const foo = (evt) => {
  evt.preventDefault();
};

const Locations = () => {
  return (
    <>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item" onClick={foo}>
            <a className="locations__item-link tabs__item tabs__item--active" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item" onClick={foo}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item" onClick={foo}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item" onClick={foo}>
            <a className="locations__item-link tabs__item">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item" onClick={foo}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item" onClick={foo}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

Locations.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer() {
    dispatch(ActionCreator.getOffers());
  },
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
