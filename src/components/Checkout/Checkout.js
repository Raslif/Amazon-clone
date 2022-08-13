import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
  const listOfBasketItems = useSelector(
    (state) => state.basketReducer.basket,
    shallowEqual
  );

  const user = useSelector((state) => state.userReducer.user, shallowEqual);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisement"
        />
        {listOfBasketItems?.length <= 0 ? (
          <div className="checkout__empty">
            <p>
              Hello, <i>{user ? user.username : "Guest"}</i>
            </p>
            <p>Your shopping basket is empty</p>
            <small>
              You have no items in your basket. To buy items, Click the "Add to
              Basket" next to the item.
            </small>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              Hello, <i>{user ? user.username : "Guest"}</i>. Your shopping
              basket here
            </h2>
            <div className="checkout__product">
              {listOfBasketItems &&
                listOfBasketItems?.length > 0 &&
                listOfBasketItems.map((item, index) => (
                  <CheckOutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
