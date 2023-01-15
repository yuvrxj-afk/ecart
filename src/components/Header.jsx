import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <nav>
      <h2>Eshop.</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingCart />
          <p>{0}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
