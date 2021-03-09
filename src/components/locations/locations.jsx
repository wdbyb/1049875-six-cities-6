import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';

const Locations = (props) => {
  const {handleUserAnswer} = props;

  return (
    <>
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className="locations__item-link tabs__item tabs__item--active" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className="locations__item-link tabs__item">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item" onClick={handleUserAnswer}>
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
  handleUserAnswer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleUserAnswer(evt) {
    evt.preventDefault();
    const city = evt.target.textContent;
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Locations};
export default connect(mapDispatchToProps)(Locations);
