import React from "react";
import "./Quantity.css";

const Quantity = ({ count, add, sub }) => {
  return (
    <div className="quantityContainer">
      <button onClick={add}>+</button>
      <div className="inputdiv">{count}</div>
      <button onClick={sub} disabled={count < 2 ? true : false}>
        -
      </button>
    </div>
  );
};

export default Quantity;
