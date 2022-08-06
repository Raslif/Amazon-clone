import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import CurrencyFormat from "react-currency-format";

import "./SubTotal.css";

function SubTotal() {
  const basketReducer = useSelector(
    (state) => state.basketReducer,
    shallowEqual
  );

  let totalAmount = 0;
  basketReducer.basket?.forEach((item) => {
    totalAmount += item.price;
  });

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basketReducer.basket?.length} items):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
