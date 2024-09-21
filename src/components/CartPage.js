import React, { useState, useEffect, forwardRef } from "react";
import "./CartPage.css";
import ModalClear from "./ModalClear";
import CartProduct from "./CartProduct";

const CartPage = forwardRef(
  (
    {
      data,
      cartDelete,
      cartClear,
      subCount,
      addCount,
      dataCount,
      showModalWindow,
      closeModalWindow,
    },
    ref
  ) => {
    const [clearCart, setClearCart] = useState(false);
    useEffect(() => {
      setClearCart(data.length > 0);
    }, [data]);
    // console.log(dataCount);
    console.log(data);

    return (
      <div className="CartContainer">
        <h2 id="cartText">Your Cart</h2>
        <div className="clearbutton">
          {clearCart ? (
            <button id="clear" onClick={showModalWindow}>
              Clear Cart
            </button>
          ) : (
            ""
          )}
        </div>
        <ModalClear ref={ref}>
          <p id="modalP">Do you want to empty the cart?</p>
          <div className="buttons">
            <button className="modalButton1" onClick={cartClear}>
              Clear
            </button>
            <button className="modalButton2" onClick={closeModalWindow}>
              Cancle
            </button>
          </div>
        </ModalClear>

        <br />
        <br />
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

        {data.map((product) => {
          const countObj = dataCount.find((item) => item.id === product.id);
          const count = countObj ? countObj.count : 0;
          console.log(count);
          console.log("name" + product.name);
          return (
            <CartProduct
              key={product.id}
              image={product.image}
              sellingPrice={product.sellingPrice}
              name={product.name}
              remove={cartDelete}
              id={product.id}
              addCount={addCount}
              subCount={subCount}
              count={count}
            ></CartProduct>
          );
        })}
      </div>
    );
  }
);

export default CartPage;
