export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const RatingStars = {
  MAX_RATING: 5,
  MAX_WIDTH: 100,
};

export const FavoritePostStatus = {
  ADD: `1`,
  DELETE: `0`
};

export const SortTypesKey = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const sortTypes = {
  [SortTypesKey.POPULAR]: (a, b) => a.id - b.id,
  [SortTypesKey.LOW_TO_HIGH]: (a, b) => a.price - b.price,
  [SortTypesKey.HIGH_TO_LOW]: (a, b) => b.price - a.price,
  [SortTypesKey.TOP_RATED]: (a, b) => b.rating - a.rating,
};
