import React from "react";
import ProductImage from "./ProductImage";
import ProductSP from "./ProductSP";
import ProductCost from "./ProductCost";
import ProductName from "./ProductName";
import ProductRating from "./ProductRating";
import "./Card.css";

const Card = ({ image, sellingPrice, cost, name, rate }) => {
  return (
    <div className="card">
      <ProductImage image={image}></ProductImage>
      <ProductSP sp={sellingPrice}></ProductSP>
      <ProductCost cost={cost}></ProductCost>
      <ProductName name={name}></ProductName>
      <ProductRating rate={rate}></ProductRating>
    </div>
  );
};

export default Card;
