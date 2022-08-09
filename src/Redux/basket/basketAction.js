import { ADD_ITEM_TO_BASKET, REMOVE_ITEM_FROM_BASKET } from "./basketTypes";

const addItemToBasket = (item) => {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload: {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      rating: item.rating,
    },
  };
};

const removeItemFromBasket = (id) => {
  return {
    type: REMOVE_ITEM_FROM_BASKET,
    payload: id,
  };
};

export { addItemToBasket, removeItemFromBasket };
