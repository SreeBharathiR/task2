import React, { useReducer, useState } from "react";
import ProductImage from "./ProductImage";
import ProductSP from "./ProductSP";
import ProductCost from "./ProductCost";
import ProductName from "./ProductName";
import ProductRating from "./ProductRating";
import "./Card.css";
import Cart from "./Cart";

const Card = ({ image, sellingPrice, cost, name, rate, add }) => {
  return (
    <div className="card">
      <ProductImage image={image}></ProductImage>
      <div className="spCart">
        <ProductSP sp={sellingPrice}></ProductSP>
        <Cart addCart={add}></Cart>
      </div>
      <ProductCost cost={cost}></ProductCost>
      <ProductName name={name}></ProductName>
      <ProductRating rate={rate}></ProductRating>
      {/* {cartState.carts.map((val) => console.log(val))} */}
    </div>
  );
};

export default Card;
