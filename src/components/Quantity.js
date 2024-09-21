import React from "react";
import "./Quantity.css";

const Quantity = ({ count, id, addCount, subCount }) => {
  return (
    <div className="quantityContainer">
      <button onClick={() => addCount(id)}>+</button>
      <div className="inputdiv">{count}</div>
      <button onClick={() => subCount(id)} disabled={count < 2 ? true : false}>
        -
      </button>
    </div>
  );
};

export default Quantity;
