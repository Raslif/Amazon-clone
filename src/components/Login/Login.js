import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";

import loginStyles from "./Login.module.css";
import AMAZON_LOGIN_LOGO from "../../Assets/amazon_login_logo.png";

function Login() {
  const [isApiCallStart, setApiCallStart] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  let navigate = useNavigate();

  const emailRegister = register("email", {
    required: "This field is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email address is not valid",
    },
  });

  const passwordRegister = register("password", {
    required: "This field is required",
    minLength: {
      value: 5,
      message: "The password should not be less than 5",
    },
  });

  const onSubmit = (data) => {
    // we will get the previous state value
    setApiCallStart((previousState) => {
      return { ...previousState, isApiCallStart: true };
    });
    let { email, password } = data;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setApiCallStart(false);
        navigate("/");
      })
      .catch((error) => {
        setApiCallStart(false);
        alert(error?.code);
      });
  };

  const onRegsiter = async () => {
    let { email, password } = getValues();
    let isInputValid = !errors.email && !errors.password;

    if (isInputValid === true) {
      setApiCallStart(true);
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          setApiCallStart(false);
          if (user) {
            navigate("/");
          }
        })
        .catch((error) => {
          setApiCallStart(false);
          alert(error?.code);
        });
    }
  };

  return (
    <div className={loginStyles.login}>
      <Link to="/">
        <div className={loginStyles.login__logo}>
          <img src={AMAZON_LOGIN_LOGO} alt="" />
        </div>
      </Link>

      <div className={loginStyles.login__form}>
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>E-mail</h5>
          <input
            type="text"
            {...emailRegister}
            placeholder="email-address"
            autoComplete="email"
          />
          {errors.email && (
            <p className={loginStyles.error__message}>{errors.email.message}</p>
          )}

          <h5>Password</h5>
          <input
            type="password"
            {...passwordRegister}
            placeholder="password"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className={loginStyles.error__message}>
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className={loginStyles.login__signin__button}
            disabled={isApiCallStart}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
        </p>

        <button
          className={loginStyles.login__register__button}
          onClick={onRegsiter}
          disabled={isApiCallStart}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
