export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTH: `REQUIRED_AUTH`,
  SAVE_DATA: `SAVE_DATA`,
  GET_COMMENTS: `GET_COMMENTS`,
  AUTH_INFO: `AUTH_INFO`,
  CLEAR_COMMENT_FORM: `CLEAR_COMMENT_FORM`,
  GET_FAVORITE: `GET_FAVORITE`,
  MOUSEOVER_CARD: `MOUSEOVER_CARD`,
  SAVE_FAVORITE_OFFER: `SAVE_FAVORITE_OFFER`,
  GET_OFFERS_NEARBY: `GET_OFFERS_NEARBY`,
  SORT_OFFERS: `SORT_OFFERS`
};

export const ActionCreator = {
  sortOffers: (sortValue) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortValue
  }),
  clearCommentForm: () => ({
    type: ActionType.CLEAR_COMMENT_FORM,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffersNearby: (offers) => ({
    type: ActionType.GET_OFFERS_NEARBY,
    payload: offers
  }),
  getFavoriteOffer: (offer) => ({
    type: ActionType.SAVE_FAVORITE_OFFER,
    payload: offer
  }),
  changeActivePin: (offerID) => ({
    type: ActionType.MOUSEOVER_CARD,
    payload: offerID
  }),
  getOffers: (data) => ({
    type: ActionType.LOAD_OFFERS,
    payload: data
  }),
  getFavorite: (data) => ({
    type: ActionType.GET_FAVORITE,
    payload: data
  }),
  getComments: (data) => ({
    type: ActionType.GET_COMMENTS,
    payload: data
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: status
  }),
  getAuthInfo: (data) => ({
    type: ActionType.AUTH_INFO,
    payload: data
  }),
  saveData: (data) => ({
    type: ActionType.SAVE_DATA,
    payload: data
  })
};
