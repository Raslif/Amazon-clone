import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import AMAZON_LOGO from "../../Assets/amazon_logo.png";

function HeaderLogo() {
  return (
    <Link to="/">
      <img className="header__logo" src={AMAZON_LOGO} alt="" />
    </Link>
  );
}

export default HeaderLogo;
