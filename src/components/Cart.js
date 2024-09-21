import React from "react";
import "./Cart.css";
function Cart({ addCart, addCount }) {
  return (
    <button className="cart" onClick={addCart}>
      <img src="cartN.png" alt="cart"></img>
    </button>
  );
}

export default Cart;
