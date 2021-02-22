import React from 'react';
import Card from '../card/card.jsx';
import PropTypes from 'prop-types';
import * as types from '../../props/offersPropTypes.js';

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer}/>)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
};

export default OffersList;
