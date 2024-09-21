import React from "react";

const Total = ({ count, price }) => {
  // console.log(`count:${count} and price:${price}`);
  return <p>₹{count * price}</p>;
};

export default Total;
