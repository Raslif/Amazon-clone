import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // add proper validation rules before the firebase call
    // we will be adding these later
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onRegsiter = (e) => {
    e.preventDefault();
    // add proper validation rules before the firebase call
    // we will be adding these later
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          debugger;
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </div>
      </Link>

      <div className="login__form">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signin__button"
            onClick={onSubmit}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
        </p>

        <button className="login__register__button" onClick={onRegsiter}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
