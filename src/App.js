import "./App.css";
import Card from "./components/Card";
import React from "react";
import { productlist } from "./data";
import Cart from "./components/Cart";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="main">
      <div className="container">
        {productlist.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            image={product.image}
            sellingPrice={product.sellingPrice}
            cost={product.cost}
            name={product.name}
            rate={product.rating}
          ></Card>
        ))}
      </div>
      <CartPage></CartPage>
    </div>
  );
}

export default App;
