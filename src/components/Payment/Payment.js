import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import CheckOutProduct from "../Checkout/CheckOutProduct";

import "./Payment.css";

function Payment() {
  const listOfBasketItems = useSelector(
    (state) => state.basketReducer.basket,
    shallowEqual
  );

  const user = useSelector((state) => state.userReducer.user, shallowEqual);

  let totalAmount = 0;
  listOfBasketItems?.forEach((item) => {
    totalAmount += item.price;
  });

  return (
    <div className="payment">
      <div className="payment__header">
        <h2>
          Checkout (
          <Link to="/checkout">
            {listOfBasketItems && listOfBasketItems?.length} items
          </Link>
          )
        </h2>
      </div>

      <div className="payment__section__container">
        {/* Address Section */}
        <div className="payment__section">
          <div className="payment__delivery__address__title">
            Delivery address
          </div>
          <div className="payment__delivery__address">
            <p>
              Hello, <i>{user ? user.username : "Guest"}</i>
            </p>
            <p>Raslif Manzil</p>
            <p>Chonamchira</p>
            <p>Perinad P.O., Kollam</p>
          </div>
        </div>

        {/* Items Section */}
        <div className="payment__section">
          <p className="payment__section__items__title">List of items</p>
          <div className="payment__section__items__list">
            {listOfBasketItems && listOfBasketItems?.length > 0 ? (
              listOfBasketItems.map((item, index) => (
                <CheckOutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <p>No Items added</p>
            )}
          </div>
        </div>

        {/* Method Section */}
        <div className="payment__section">
          <div className="payment__method__title">
            <p>Payment method</p>
          </div>
          <div className="payment__method__details">
            <p>Card Details</p>
            <div className="payment__method__buy_now__section">
              <div className="payment__method__buy__now__section_order__total">
                <p>Order Total: ${totalAmount}</p>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
