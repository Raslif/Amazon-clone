import React from "react";
import "./CheckOutProduct.css";

function CheckOutProduct({ id, title, image, price, rating }) {
  //   const removeFromBasket = (id) => {
  //     console.log(id);
  //   };

  return (
    <div className="checkout__product__item">
      <img className="checkout__product__image" src={image} />
      <div className="checkout__product__info">
        <p>{title}</p>
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
          <button>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProduct;
