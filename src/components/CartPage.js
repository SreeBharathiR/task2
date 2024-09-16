import React, { useReducer, useState } from "react";
import "./CartPage.css";
import Card from "./Card";
import CartProduct from "./CartProduct";

function CartPage({ data, cartDelete }) {
  const [productCounts, setProductCounts] = useState(1);
  const addProductCount = () => {
    setProductCounts(productCounts + 1);
    console.log(productCounts);
  };
  const subProductCount = () => {
    setProductCounts(productCounts - 1);
    console.log(productCounts);
  };

  return (
    <div className="CartContainer">
      <h2 id="cartText">Your Cart</h2>
      <br></br>
      <div id="line1"></div>
      <div className="headings">
        <div className="product">
          <p className="content">Product</p>
        </div>
        <div className="innerHeading">
          <p className="content">Price</p>
          <p className="content">Quantity</p>
          <p className="content">Total</p>
          <p className="content">Remove</p>
        </div>
      </div>
      <div id="line2"></div>

      {data.map((product) => (
        <CartProduct
          key={product.id}
          image={product.image}
          sellingPrice={product.sellingPrice}
          name={product.name}
          addC={addProductCount}
          subC={subProductCount}
          quantity={productCounts}
          remove={cartDelete}
          id={product.id}
        ></CartProduct>
      ))}
    </div>
  );
}

export default CartPage;
