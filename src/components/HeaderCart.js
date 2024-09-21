import React from "react";
import "./HeaderCart.css";
import { Link } from "react-router-dom";
const HeaderCart = () => {
  return (
    <div className="cartImg">
      <Link to="/cart">
        <img src="cartN.png" alt="cart"></img>
      </Link>
    </div>
  );
};

export default HeaderCart;
