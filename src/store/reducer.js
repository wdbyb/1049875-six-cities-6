import offers from '../mocks/offers.js';
import {ActionType} from './action.js';

const initialState = {
  offers,
  city: `Paris`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        offers: state.offers
      };
    case ActionType.GET_OFFERS:
      return {
        offers: state.offers
      };
  }

  return state;
};

export {reducer};
