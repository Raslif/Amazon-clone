import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";

import "./CheckOutProduct.css";
import { removeItemFromBasket } from "../../../src/Redux/basket/basketAction";

const CheckOutProduct = forwardRef(
  ({ id, title, image, price, rating }, ref) => {
    const dispatch = useDispatch();

    const removeFromBasket = () => {
      dispatch(removeItemFromBasket(id));
    };

    return (
      <div className="checkout__product__item" ref={ref}>
        <div>
          <img className="checkout__product__image" src={image} alt="" />
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
);

export default CheckOutProduct;
