import React, { useReducer, useState } from "react";
import ProductImage from "./ProductImage";
import ProductSP from "./ProductSP";
import ProductCost from "./ProductCost";
import ProductName from "./ProductName";
import ProductRating from "./ProductRating";
import "./Card.css";
import Cart from "./Cart";
import { productlist } from "../data";

const initialState = {
  carts: [],
};
function reducerFunc(prevState, action) {
  switch (action.type) {
    case "ADD":
      let element = productlist.find(
        (product) => product.id === action.payload
      );
      // console.log(prevState);
      // console.log(element);
      if (element) {
        return {
          ...prevState,
          carts: [...prevState.carts, element],
        };
      }
      return prevState;
    default:
      return prevState;
  }
}
const Card = ({ id, image, sellingPrice, cost, name, rate }) => {
  const [cartState, cartDispatch] = useReducer(reducerFunc, initialState);
  const [handleState, setHandleState] = useState(false);
  function handleAddCart() {
    cartDispatch({
      type: "ADD",
      payload: id,
    });
    console.log("check add");
  }
  return (
    <div className="card">
      <ProductImage image={image}></ProductImage>
      <div className="spCart">
        <ProductSP sp={sellingPrice}></ProductSP>
        <Cart add={handleAddCart}></Cart>
      </div>
      <ProductCost cost={cost}></ProductCost>
      <ProductName name={name}></ProductName>
      <ProductRating rate={rate}></ProductRating>
      {cartState.carts.map((val) => console.log(val))}
    </div>
  );
};

export default Card;
