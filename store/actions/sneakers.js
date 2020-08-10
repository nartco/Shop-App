export const TOGGLE_CART = "TOGGLE_CART";
export const SET_FILTERS = "SET_FILTERS";
export const ADD_SNEAKERS = "ADD_SNEAKERS";

export const toggleFavorite = id => {
  return { type: TOGGLE_CART, sneakersId: id };
};

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
};

export const addSneakers = (
  id = null,
  categoryBrand,
  title,
  description,
  price,
  size,
  imageUrl
) => {
  return {
    sneakersId: id,
    type: ADD_SNEAKERS,
    categoryBrand: categoryBrand,
    title: title,
    description: description,
    price: price,
    size: size,
    imageUrl: imageUrl
  };
};
