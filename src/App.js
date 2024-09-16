import "./App.css";
import Card from "./components/Card";
import React, { useReducer } from "react";
import { productlist } from "./data";
import Cart from "./components/Cart";
import CartPage from "./components/CartPage";

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
    case "DELETE":
      console.log(action.payload);
      return {
        ...prevState,
        carts: prevState.carts.filter((cart) => {
          cart.id !== action.payload;
        }),
      };
    default:
      return prevState;
  }
}
function App() {
  const [cartState, cartDispatch] = useReducer(reducerFunc, initialState);
  function handleAddCart(id) {
    cartDispatch({
      type: "ADD",
      payload: id,
    });
    console.log("check add");
  }
  function handleDeleteCart(id) {
    cartDispatch({
      type: "DELETE",
      payload: id,
    });
  }
  return (
    <div className="main">
      <div className="container">
        {productlist.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            sellingPrice={product.sellingPrice}
            cost={product.cost}
            name={product.name}
            rate={product.rating}
            add={() => {
              handleAddCart(product.id);
            }}
          ></Card>
        ))}
      </div>
      <CartPage data={cartState.carts} cartDelete={handleDeleteCart}></CartPage>
    </div>
  );
}

export default App;
