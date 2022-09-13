import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

import "./SubTotal.css";

function SubTotal() {
  let navigate = useNavigate();

  const listOfBasketItems = useSelector(
    (state) => state.basketReducer.basket,
    shallowEqual
  );

  let totalAmount = 0;
  listOfBasketItems?.forEach((item) => {
    totalAmount += item.price;
  });

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({listOfBasketItems?.length} items):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> <span>This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={(e) => {
          listOfBasketItems?.length > 0 && navigate("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
