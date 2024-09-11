import React from "react";
import "./ProductImage.css";
function ProductImage({ image }) {
  return <img id="productimg" src={image} alt="product"></img>;
}

export default ProductImage;
