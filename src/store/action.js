export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`
};

export const ActionCreator = {
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload
  })
};
