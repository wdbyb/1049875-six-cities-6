import offers from '../mocks/offers.js';
import {ActionType} from './action.js';

const DEFAULT_CITY = `Paris`;

const initialState = {
  offers,
  city: DEFAULT_CITY,
  filtredOffers: offers.filter((i) => i.city.name === DEFAULT_CITY)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        filtredOffers: state.offers.filter((offer) => offer.city.name === action.payload)
      };
  }

  return state;
};

export {reducer};
