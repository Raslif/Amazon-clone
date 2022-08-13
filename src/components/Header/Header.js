import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import { auth } from "../../firebase";

function Header() {
  const listOfBasketItems = useSelector(
    (state) => state.basketReducer.basket,
    shallowEqual
  );
  const user = useSelector((state) => state.userReducer.user, shallowEqual);

  const handleAuthentication = () => {
    auth.signOut();
  };

  let userSignOutSignInOptions = (
    <>
      <span className="header__optionLineOne">
        Hello, {user ? user.username : "Guest"}
      </span>
      <span className="header__optionLineTwo">
        {user ? "Sign Out" : "Sign In"}
      </span>
    </>
  );

  return (
    <div className="header">
      <HeaderLogo />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            {userSignOutSignInOptions}
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header__option__basket">
            <span className="header__optionLineOne__cartitems__count">
              {listOfBasketItems?.length}
            </span>
            <ShoppingCartIcon />
          </div>
        </Link>

        <div className="header__option__basket">
          <span className="header__cart__text">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
