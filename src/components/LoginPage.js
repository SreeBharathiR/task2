import React, { useContext, useState } from "react";
import { users } from "../userLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";
import "./LoginPage.css";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  function login() {
    // console.log(name);
    // console.log(password);
    let check = users.find(
      (val) => val.name === name && val.password === password
    );
    if (check) {
      handleLogin();
      navigate("/");
    } else {
      setName("");
      setPassword("");
      alert("Your user name or password is incorrect, Please check!!");
    }
  }
  return (
    <div className="loginBackground">
      <div className="login">
        <p id="loginP">Login</p>
        <div>
          <input
            className="input"
            type="text"
            id="user"
            placeholder="Email"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div>
          <input
            className="input2"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          ></input>
        </div>
        <button onClick={login} id="loginBtn">
          Login
        </button>
        <p id="sign">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
