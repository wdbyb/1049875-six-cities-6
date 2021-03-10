export const adaptDataToClient = (data) => {
  const adaptedData = Object.assign(
      {},
      data,
      {
        host: {
          avatarUrl: data.host.avatar_url,
          isPro: data.host.is_pro,
          id: data.host.id,
          name: data.host.name
        },
        isFavorite: data.is_favorite,
        isPremium: data.is_premium,
        maxAdults: data.max_adults,
        previewImage: data.preview_image
      }
  );

  return adaptedData;
};
