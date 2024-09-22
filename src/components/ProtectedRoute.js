import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";
const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
