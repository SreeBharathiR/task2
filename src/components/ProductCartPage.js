import React, { useContext } from "react";
import CartPage from "./CartPage";
import CartContext from "../context/CartContext";
const ProductCartPage = () => {
  const {
    showModalWindow,
    closeModalWindow,
    handleDeleteCart,
    handleClearCart,
    subProductCount,
    addProductCount,
    cartState,
    clearRef,
  } = useContext(CartContext);
  return (
    <CartPage
      data={cartState.carts}
      dataCount={cartState.countCarts}
      subCount={subProductCount}
      addCount={addProductCount}
      cartDelete={handleDeleteCart}
      cartClear={handleClearCart}
      ref={clearRef}
      showModalWindow={showModalWindow}
      closeModalWindow={closeModalWindow}
    ></CartPage>
  );
};

export default ProductCartPage;
