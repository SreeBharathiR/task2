import React from "react";
import "./LogoName.css";
import { Link } from "react-router-dom";
const LogoName = () => {
  return (
    <Link className="linkA" to="/">
      <div className="logoName">
        <div className="logo"></div>
        <p>WebCom</p>
      </div>
    </Link>
  );
};

export default LogoName;
