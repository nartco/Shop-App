import { SNEAKERS } from "../../data/sneakers-data";
import {
  TOGGLE_CART,
  SET_SIZE,
  CLEAR_SIZE,
  ORDER,
  SET_FILTERS,
  ADD_SNEAKERS
} from "../actions/sneakers";

const initialState = {
  sneakers: SNEAKERS,
  filtersSneakers: SNEAKERS,
  cartSneakers: [],
  size: 0,
  order: []
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      const existingIndex = state.cartSneakers.findIndex(
        sneakers => sneakers.id === action.sneakersId
      );
      if (existingIndex >= 0) {
        const updatedSneakersCart = [...state.cartSneakers];
        updatedSneakersCart.splice(existingIndex, 1);
        return { ...state, cartSneakers: updatedSneakersCart };
      } else {
        let sneakers = state.sneakers.find(
          sneakers => sneakers.id === action.sneakersId
        );
        sneakers = { ...sneakers };
        const verifQuantity = state.cartSneakers.reduce(
          (a, sneakers) => (sneakers.id === action.sneakersId ? a + 1 : a),
          0
        );
        sneakers.quantity =
          state.cartSneakers.length === 0
            ? 1
            : verifQuantity === 0
            ? 1
            : verifQantity;
        sneakers.sizeSelected = state.size;
        return { ...state, cartSneakers: state.cartSneakers.concat(sneakers) };
      }
    case SET_SIZE:
      const verif = state.size === action.size ? 0 : action.size;
      return { ...state, size: verif };
    case CLEAR_SIZE:
      return { ...state, size: 0 };

    case ORDER:
      let updatedSneakers = [...state.sneakers];
      let cart = [...state.cartSneakers];

      cart = cart.map(s => {
        const existingIndex = updatedSneakers.findIndex(
          sneakers => sneakers.id === s.id
        );
        updatedSneakers.splice(existingIndex, 1);
      });

     
      return {
        ...state,
        order: [
          ...state.order,
          [action.id, action.email, action.tel, action.address, action.name]
        ],
        filtersSneakers: updatedSneakers,
        sneakers: updatedSneakers
      };
    // case SET_FILTERS:
    //   const appliedFilters = action.filters;
    //   const filteredMeals = state.meals.filter(meal => {
    //     if (appliedFilters.glutenFree && !meal.isGlutenFree) {
    //       return false;
    //     }
    //     if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
    //       return false;
    //     }
    //     if (appliedFilters.vegetarian && !meal.isVegetarian) {
    //       return false;
    //     }
    //     if (appliedFilters.vegan && !meal.isVegan) {
    //       return false;
    //     }
    //     return true;
    //   });
    //     return {...state, filersMeals: filteredMeals}
    default:
      return state;
  }
  return state;
};

export default sneakersReducer;
