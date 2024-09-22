import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import ProductCartPage from "./components/ProductCartPage";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContex";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./components/SignUp";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ProductListPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <ProductCartPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
