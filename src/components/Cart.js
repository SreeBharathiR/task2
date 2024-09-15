import React from "react";
import "./Cart.css";
function Cart({ add }) {
  return (
    <button className="cart" onClick={add}>
      <img src="cartN.png" alt="cart"></img>
    </button>
  );
}

export default Cart;
