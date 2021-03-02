export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

export const ActionCreator = {
  getOffers: () => ({
    type: ActionType.GET_OFFERS
  }),
  changeCity: () => ({
    type: ActionType.CHANGE_CITY
  })
};
