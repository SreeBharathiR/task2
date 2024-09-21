import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Card from "./Card";
const ProductListPage = () => {
  const { productlist, handleAddCart, addProductCount } =
    useContext(CartContext);
  return (
    <div className="mainContainer">
      <h2>Electronic Gadgets</h2>

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
            addCount={() => addProductCount(product.id)}
            id={product.id}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
