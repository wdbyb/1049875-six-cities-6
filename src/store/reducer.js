import {ActionType} from './action.js';
import {AuthStatus} from '../const.js';

const DEFAULT_CITY = `Paris`;

const offers = [];

const initialState = {
  offers,
  clearCommentForm: false,
  authStatus: AuthStatus.NO_AUTH,
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
    case ActionType.REQUIRED_AUTH:
      return {
        ...state,
        authStatus: action.payload
      };
    case ActionType.SAVE_DATA:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload
      };
    case ActionType.AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };
    case ActionType.GET_COMMENTS:
      return {
        ...state,
        currentOfferCommentsList: action.payload
      };
      case ActionType.CLEAR_COMMENT_FORM:
        return {
          ...state,
          clearCommentForm: true
        };
  }

  return state;
};

export {reducer};
