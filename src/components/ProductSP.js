import React from "react";
import "./ProductSP.css";
function ProductSP({ sp }) {
  return (
    <p id="sp">
      <span>₹</span>
      {sp}
      <span>00</span>
    </p>
  );
}

export default ProductSP;
