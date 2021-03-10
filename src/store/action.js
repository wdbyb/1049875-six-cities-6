export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

export const ActionCreator = {
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload
  }),
  getOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload
  })
};
