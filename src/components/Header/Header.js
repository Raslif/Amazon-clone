import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <HeaderLogo />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Sign In</span>
          <span className="header__optionLineTwo">Accounts & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option__basket">
          <span className="header__optionLineOne__cartitems__count">0</span>
          <ShoppingCartIcon />
        </div>

        <div className="header__option__basket">
          <span className="header__cart__text">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
