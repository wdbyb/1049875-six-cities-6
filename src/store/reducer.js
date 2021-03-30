import {ActionType} from './action.js';
import {AuthStatus} from '../const.js';

const DEFAULT_CITY = `Paris`;

const offers = [];

const initialState = {
  offers,
  clearCommentForm: false,
  authStatus: AuthStatus.NO_AUTH,
  authInfo: {},
  city: DEFAULT_CITY,
  isDataLoaded: false,
  filtredOffers: offers.filter((offer) => offer.city.name === DEFAULT_CITY),
  currentOfferCommentsList: [],
  currentRoomOffersNearby: [],
  favoriteOffers: [],
  currentMouseOverCardID: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOUSEOVER_CARD:
      return {
        ...state,
        currentMouseOverCardID: action.payload
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        filtredOffers: state.offers.filter((offer) => offer.city.name === action.payload)
      };
    case ActionType.GET_OFFERS_NEARBY:
      return {
        ...state,
        currentRoomOffersNearby: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        filtredOffers: action.payload.filter((offer) => offer.city.name === DEFAULT_CITY),
        isDataLoaded: true
      };
    case ActionType.SAVE_FAVORITE_OFFER:
      return {
        ...state,
        filtredOffers: state.filtredOffers.map((offer) => +offer.id === +action.payload.id ? action.payload : item),
      };
    case ActionType.REQUIRED_AUTH:
      return {
        ...state,
        authStatus: action.payload
      };
    case ActionType.SAVE_DATA:
      return {
        ...state,
        authInfo: action.payload
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
    case ActionType.GET_FAVORITE:
      return {
        ...state,
        favoriteOffers: action.payload
      };
  }

  return state;
};

export {reducer};
