import { ADD_ITEM_TO_BASKET, REMOVE_ITEM_FROM_BASKET } from "./basketTypes";

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case REMOVE_ITEM_FROM_BASKET:
      let newBasket = [...state.basket];
      let index = state.basket.findIndex((item) => item.id == action.payload);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Item not found!!!");
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default basketReducer;
