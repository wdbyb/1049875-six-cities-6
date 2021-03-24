export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTH: `REQUIRED_AUTH`,
  SAVE_DATA: `SAVE_DATA`,
  GET_COMMENTS: `GET_COMMENTS`,
  AUTH_INFO: `AUTH_INFO`,
  CLEAR_COMMENT_FORM: `CLEAR_COMMENT_FORM`,
  GET_FAVORITE: `GET_FAVORITE`,
  POST_FAVORITE: `POST_FAVORITE`
};

export const ActionCreator = {
  clearCommentForm: () => ({
    type: ActionType.CLEAR_COMMENT_FORM,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
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
