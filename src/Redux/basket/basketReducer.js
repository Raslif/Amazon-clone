import ADD_ITEM_TO_BASKET from "./basketTypes";

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

    default:
      return state;
  }
};

export default basketReducer;
