import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.cart);

  return cartItems.length ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
