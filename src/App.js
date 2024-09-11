import "./App.css";
import Card from "./components/Card";
import React from "react";
import { productlist } from "./data";

function App() {
  return (
    <div className="container">
      {productlist.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          sellingPrice={product.sellingPrice}
          cost={product.cost}
          name={product.name}
          rate={product.rating}
        ></Card>
      ))}
    </div>
  );
}

export default App;
