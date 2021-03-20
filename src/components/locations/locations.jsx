import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';

const Locations = (props) => {
  const {handleUserAnswer, city} = props;

  return (
    <>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className={`locations__item-link tabs__item ${city === `Paris` ? `tabs__item--active` : ``}`} href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className={`locations__item-link tabs__item ${city === `Cologne` ? `tabs__item--active` : ``}`} href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className={`locations__item-link tabs__item ${city === `Brussels` ? `tabs__item--active` : ``}`} href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className={`locations__item-link tabs__item ${city === `Amsterdam` ? `tabs__item--active` : ``}`} href="#">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className={`locations__item-link tabs__item ${city === `Hamburg` ? `tabs__item--active` : ``}`} href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className={`locations__item-link tabs__item ${city === `Dusseldorf` ? `tabs__item--active` : ``}`} href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

Locations.propTypes = {
  handleUserAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  handleUserAnswer(evt) {
    evt.preventDefault();
    const city = evt.target.textContent;
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
