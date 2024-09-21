import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import ProductCartPage from "./components/ProductCartPage";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/cart" element={<ProductCartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
