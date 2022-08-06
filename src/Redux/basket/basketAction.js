import ADD_ITEM_TO_BASKET from "./basketTypes";

const addItemToBasket = (item) => {
  //console.log(item);
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

export default addItemToBasket;
