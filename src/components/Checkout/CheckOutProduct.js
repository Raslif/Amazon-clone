import React from "react";
import { useDispatch } from "react-redux";

import "./CheckOutProduct.css";
import { removeItemFromBasket } from "../../../src/Redux/basket/basketAction";

function CheckOutProduct({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(removeItemFromBasket(id));
  };

  return (
    <div className="checkout__product__item">
      <div>
        <img className="checkout__product__image" src={image} />
      </div>
      <div className="checkout__product__info">
        <p className="checkout__product__title">{title}</p>
        <p className="checkout__product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__product__rating">
          {Array(+rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>

        <div className="checkout__product__remove__basket">
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProduct;
