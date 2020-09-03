import moment from "moment";
import { SNEAKERS } from "../../data/sneakers-data";
import {
  TOGGLE_CART,
  SET_SIZE,
  CLEAR_SIZE,
  ORDER,
  CLEAR_CART,
  REMOVE_SNEAKERS,
  EDIT_SNEAKERS,
  SET_FILTERS
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

      cart.map(s => {
        s.date = moment().format("MM-DD-YYYY");
        const existingIndex = updatedSneakers.findIndex(
          sneakers => sneakers.id === s.id
        );
        updatedSneakers.splice(existingIndex, 1);
      });

      return {
        ...state,
        order: [
          ...state.order,
          [cart, action.email, action.tel, action.address, action.name]
        ],
        filtersSneakers: updatedSneakers,
        sneakers: updatedSneakers
      };

    case CLEAR_CART:
      return { ...state, cartSneakers: [] };

    case REMOVE_SNEAKERS:
      const index = state.sneakers.findIndex(
        sneakers => sneakers.id === action.id
      );
      let updatedSneakersManage = [...state.sneakers];
      updatedSneakersManage.splice(index, 1);
      return {
        ...state,
        sneakers: updatedSneakersManage,
        filtersSneakers: updatedSneakersManage
      };

    case EDIT_SNEAKERS:
      const indexEdit = state.sneakers.findIndex(
        sneakers => sneakers.id === action.id
      );

      let updatedSneakersEdit = [...state.sneakers];

      let sneakers = state.sneakers.find(sneakers => sneakers.id === action.id);
      if (action.title) {
        sneakers.title = action.title;
      }
      if (action.description) {
        sneakers.description = action.description;
      }
      if (action.price) {
        sneakers.price = action.price;
      }
      if (action.size) {
        sneakers.size = action.size;
      }

      updatedSneakersEdit.splice(indexEdit, 1, sneakers);

      return { ...state, filtersSneakers: updatedSneakersEdit, sneakers: updatedSneakersEdit}

      case SET_FILTERS:
      const sneakersArray = [...state.sneakers]
      let  filteredSneakers
      if(action.filters){
         filteredSneakers = state.sneakers.filter(sneakers => sneakers.categoryIds === action.filters)
      } else {
        return { ...state, filtersSneakers: sneakersArray}
      }
      return {...state, filtersSneakers: filteredSneakers}

    default:
      return state;
  }
  return state;
};

export default sneakersReducer;
