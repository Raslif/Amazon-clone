import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function HeaderLogo() {
  return (
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
    </Link>
  );
}

export default HeaderLogo;
