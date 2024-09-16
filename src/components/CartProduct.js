import React from "react";
import ProductImage from "./ProductImage";
import DeleteButton from "./DeleteButton";
import ProductSP from "./ProductSP";
import Quantity from "./Quantity";
import Total from "./Total";
import "./CartProduct.css";

const CartProduct = ({
  image,
  sellingPrice,
  quantity,
  name,
  addC,
  subC,
  remove,
  id,
}) => {
  return (
    <div>
      <div className="cartProductContainer">
        <div className="imageName">
          <ProductImage image={image}></ProductImage>
          <p>{name}</p>
        </div>
        {console.log(`${id} and ${name}`)}
        <div className="remainingdata">
          <p>₹{sellingPrice}</p>
          <Quantity count={quantity} add={addC} sub={subC}></Quantity>
          <Total></Total>
          <DeleteButton rev={remove} iddelete={id}></DeleteButton>
        </div>
      </div>
      <div id="line2"></div>
    </div>
  );
};

export default CartProduct;
