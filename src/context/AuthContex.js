import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const handleLogin = () => {
    setIsAuth(true);
  };
  const handleLogOut = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleLogOut, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
