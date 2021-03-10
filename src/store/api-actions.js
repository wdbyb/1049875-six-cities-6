import {ActionType} from './action.js';
import {adaptDataToClient} from '../services/utils.js';

export const fetchOffersList = () => (next, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => data.map(adaptDataToClient))
    .then((data) => next({
      type: ActionType.LOAD_OFFERS,
      payload: data
    }))
);
