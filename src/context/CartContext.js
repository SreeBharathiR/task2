import React, { createContext, useReducer, useRef } from "react";
import { productlist } from "../data";
const CartContext = createContext();

const initialState = {
  carts: [],
  countCarts: [],
};
function reducerFunc(prevState, action) {
  switch (action.type) {
    case "ADD":
      let element = productlist.find(
        (product) => product.id === action.payload
      );
      let cartElement = prevState.countCarts.find(
        (item) => item.id === action.payload
      );
      // console.log(prevState);
      // console.log(element);
      console.log(cartElement);
      if (element) {
        if (cartElement) {
          return {
            ...prevState,
            countCarts: prevState.countCarts.map((item) =>
              item.id === action.payload
                ? { ...item, count: item.count + 1 }
                : item
            ),
          };
        } else {
          return {
            ...prevState,
            carts: [...prevState.carts, element],
            countCarts: [
              ...prevState.countCarts,
              { id: action.payload, count: 1 },
            ],
          };
        }
      }
      return prevState;
    case "DELETE":
      // console.log(action.payload);
      return {
        ...prevState,
        carts: prevState.carts.filter((cart) => cart.id !== action.payload),
        countCarts: prevState.countCarts.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "EMPTY":
      return {
        carts: [],
        countCarts: [],
      };
    case "QUANTITYINC":
      return {
        ...prevState,
        countCarts: prevState.countCarts.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };
    case "QUANTITYDEC":
      return {
        ...prevState,
        countCarts: prevState.countCarts.map((item) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        ),
      };
    default:
      return prevState;
  }
}
export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(reducerFunc, initialState);
  const clearRef = useRef();
  console.log(cartState.countCarts);
  function handleAddCart(id) {
    cartDispatch({
      type: "ADD",
      payload: id,
    });
    // console.log("check add");
  }
  function handleDeleteCart(id) {
    cartDispatch({
      type: "DELETE",
      payload: id,
    });
  }
  function showModalWindow() {
    clearRef.current.showModal();
  }
  function closeModalWindow() {
    clearRef.current.close();
  }
  const handleClearCart = () => {
    cartDispatch({
      type: "EMPTY",
    });
    clearRef.current.close();
  };
  const addProductCount = (id) => {
    cartDispatch({ type: "QUANTITYINC", payload: id });
  };

  const subProductCount = (id) => {
    cartDispatch({ type: "QUANTITYDEC", payload: id });
  };
  return (
    <CartContext.Provider
      value={{
        handleAddCart,
        handleClearCart,
        handleDeleteCart,
        showModalWindow,
        closeModalWindow,
        addProductCount,
        subProductCount,
        productlist,
        cartState,
        clearRef,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
