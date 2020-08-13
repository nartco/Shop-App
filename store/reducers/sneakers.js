import { SNEAKERS, CATEGORIES } from "../../data/sneakers-data";
import {
  TOGGLE_CART,
  SET_FILTERS,
  ADD_SNEAKERS,
  SELECT_BRAND
} from "../actions/sneakers";

const initialState = {
  sneakers: SNEAKERS,
  filtersSneakers: SNEAKERS,
  cartSneakers: [],
  brands: CATEGORIES
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      const existingIndex = state.cartSneakers.findIndex(
        sneakers => sneakers.id === action.sneakersId
      );
      if (existingIndex >= 0) {
        const updatedSneakersCart = [...state.cartSneakers];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, cartSneakers: updatedSneakersCart };
      } else {
        const sneakers = state.sneakers.find(
          sneakers => sneakers.id === action.sneakersId
        );
        return { ...state, cartSneakers: state.cartSneakers.concat(sneakers) };
      }
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
