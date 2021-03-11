export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTH: `REQUIRED_AUTH`,
  SAVE_DATA: `SAVE_DATA`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (data) => ({
    type: ActionType.LOAD_OFFERS,
    payload: data
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: status
  }),
  saveData: (data) => ({
    type: ActionType.SAVE_DATA,
    payload: data
  })
};
