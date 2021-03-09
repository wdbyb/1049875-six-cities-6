import {ActionType} from './action.js';

export const fetchOffersList = () => (next, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => next({
      type: ActionType.LOAD_OFFERS,
      payload: data
    }))
);
