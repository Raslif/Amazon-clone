import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </div>

      <div className="login__form">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value="" />

          <h5>Password</h5>
          <input type="password" value="" />

          <button type="submit" className="login__signin__button">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
        </p>

        <button className="login__register__button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
