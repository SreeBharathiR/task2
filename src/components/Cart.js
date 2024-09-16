import React from "react";
import "./Cart.css";
function Cart({ addCart }) {
  return (
    <button className="cart" onClick={addCart}>
      <img src="cartN.png" alt="cart"></img>
    </button>
  );
}

export default Cart;
