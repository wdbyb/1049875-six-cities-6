import {ActionType, ActionCreator} from './action.js';
import {adaptDataToClient} from '../services/utils.js';
import {AuthStatus} from '../const.js';

export const fetchOffersList = () => (next, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => data.map(adaptDataToClient))
    .then((data) => next({
      type: ActionType.LOAD_OFFERS,
      payload: data
    }))
);

export const checkAuth = () => (next, _getState, api) => (
  api.get(`/login`)
    .then(() => next(ActionCreator.requireAuth(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (next, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => {
      next(ActionCreator.requireAuth(AuthStatus.AUTH))
      next(ActionCreator.saveData(response.data))
    })
);
