import {ActionCreator} from './action.js';
import {adaptDataToClient} from '../services/utils.js';
import {AuthStatus} from '../const.js';

export const fetchOffersList = () => (next, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => data.map(adaptDataToClient))
    .then((data) => next(ActionCreator.getOffers(data)))
    .catch(() => {})
);

export const fetchFavoriteList = () => (next, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => data.map(adaptDataToClient))
    .then((data) => next(ActionCreator.getFavorite(data)))
    .catch(() => {})
);

export const postFavorite = (offerID, status) => (next, _getState, api) => (
  api.post(`/favorite/${offerID}/${status}`)
    .then(({data}) => adaptDataToClient(data))
    .then((offer) => next(ActionCreator.getFavoriteOffer(offer)))
    .catch(() => {})
);

export const fetchCommentsList = (offerID) => (next, _getState, api) => (
  api.get(`/comments/${offerID}`)
    .then(({data}) => next(ActionCreator.getComments(data)))
    .catch(() => {})
);

export const fetchOffersNearby = (offerID) => (next, _getState, api) => (
  api.get(`/hotels/${offerID}/nearby`)
    .then(({data}) => data.map(adaptDataToClient))
    .then((data) => next(ActionCreator.getOffersNearby(data)))
    .catch(() => {})
);

export const commentPost = ({comment, rating, offerID}) => (next, _getState, api) => (
  api.post(`/comments/${offerID}`, {comment, rating})
  .then(({data}) => {
    next(ActionCreator.getComments(data));
    next(ActionCreator.clearCommentForm());
  })
  .catch(() => {})
);

export const checkAuth = () => (next, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      next(ActionCreator.requireAuth(AuthStatus.AUTH));
      next(ActionCreator.getAuthInfo(data));
    })
    .catch(() => {})
);

export const login = ({email, password}) => (next, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      next(ActionCreator.requireAuth(AuthStatus.AUTH));
      next(ActionCreator.saveData(data));
    })
);
