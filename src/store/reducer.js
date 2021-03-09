import {ActionType} from './action.js';

const DEFAULT_CITY = `Paris`;

const offers = [];

const initialState = {
  offers,
  city: DEFAULT_CITY,
  isDataLoaded: false,
  filtredOffers: offers.filter((offer) => offer.city.name === DEFAULT_CITY)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        filtredOffers: state.offers.filter((offer) => offer.city.name === action.payload)
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        filtredOffers: action.payload.filter((offer) => offer.city.name === DEFAULT_CITY),
        isDataLoaded: true
      };
  }

  return state;
};

export {reducer};
