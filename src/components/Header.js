import React from "react";
import LogoName from "./LogoName";
import "./Header.css";
import HeaderCart from "./HeaderCart";
const Header = () => {
  return (
    <header>
      <LogoName></LogoName>
      <div className="navigate">
        <HeaderCart></HeaderCart>
      </div>
    </header>
  );
};

export default Header;
