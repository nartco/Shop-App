export const TOGGLE_CART = "TOGGLE_CART";
export const SET_FILTERS = "SET_FILTERS";
export const ADD_SNEAKERS = "ADD_SNEAKERS";
export const SET_SIZE = "SET_SIZE";
export const CLEAR_SIZE = "CLEAR_SIZE"
export const CLEAR_CART = "CLEAR_CART"
export const ORDER = 'ORDER'
export const REMOVE_SNEAKERS = 'REMOVE_SNEAKERS'
export const EDIT_SNEAKERS = 'EDIT_SNEAKERS'


export const toggleCart = id => {
  return { type: TOGGLE_CART, sneakersId: id };
};

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
};

export const setSize = size => {
  return { type: SET_SIZE, size: size}
}

export const clearSize = () => {
  return { type: CLEAR_SIZE }
}

export const order = (name, address, tel, email) => {
  return { type: ORDER, name: name, address: address, tel: tel, email: email }
}

export const clearCart = () => {
  return { type: CLEAR_CART  }
}

export const editSneakers = (
  id,
  title = null,
  description = null,
  price = null,
  size = null
) => {
  return {
    type: EDIT_SNEAKERS,
    id: id,
    title: title,
    description: description,
    price: price,
    size: size,
  };
};

export const removeSneakers = id => {
  return { type: REMOVE_SNEAKERS, id: id}
}

