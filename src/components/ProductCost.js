import React from "react";
import "./ProductCost.css";
function ProductCost({ cost }) {
  return <p id="cost">{cost}.00</p>;
}

export default ProductCost;
