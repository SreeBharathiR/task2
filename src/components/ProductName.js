import React from "react";
import "./ProductName.css";
function ProductName({ name }) {
  return (
    <div id="name">
      <p>{name}</p>
    </div>
  );
}

export default ProductName;
