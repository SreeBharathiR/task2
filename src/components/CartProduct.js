import React, { useState } from "react";
import ProductImage from "./ProductImage";
import DeleteButton from "./DeleteButton";
import ProductSP from "./ProductSP";
import Quantity from "./Quantity";
import Total from "./Total";
import "./CartProduct.css";

const CartProduct = ({
  image,
  sellingPrice,
  name,
  remove,
  id,
  addCount,
  subCount,
  count,
}) => {
  console.log("welcome");
  // const [productCounts, setProductCounts] = useState(1);
  // const addProductCount = () => {
  //   setProductCounts(productCounts + 1);
  //   console.log(productCounts);
  // };
  // const subProductCount = () => {
  //   setProductCounts(productCounts - 1);
  //   console.log(productCounts);
  // };
  // console.log(dataCount);
  // let count = dataCount.find((item) => item.id === id);
  // console.log("count" + count);
  console.log("name" + name);
  return (
    <div>
      <div className="cartProductContainer">
        <div className="imageName">
          <ProductImage image={image}></ProductImage>
          <p>{name}</p>
        </div>
        {/* {console.log(`${id} and ${name}`)} */}
        <div className="remainingdata">
          <p>₹{sellingPrice}</p>
          <Quantity
            id={id}
            addCount={addCount}
            subCount={subCount}
            count={count}
          ></Quantity>
          <Total count={count} price={sellingPrice}></Total>
          <DeleteButton rev={remove} iddelete={id}></DeleteButton>
        </div>
      </div>
      <div id="line2"></div>
    </div>
  );
};

export default CartProduct;
