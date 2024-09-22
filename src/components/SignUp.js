import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [createPass, setCreatePass] = useState("");
  const [confirm, setConfirm] = useState("");
  function confirmPassword() {}
  return (
    <div className="signupContainer">
      <div className="signup">
        <p id="signP">Signup</p>
        <input type="text" id="email" placeholder="Email"></input>
        <input
          type="password"
          id="password"
          placeholder="Create Password"
        ></input>
        <input
          type="password"
          id="Conformpasseord"
          placeholder="Confirm Password"
        ></input>
        <button id="signupBtn">SignUp</button>
        <p id="backlogin">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
