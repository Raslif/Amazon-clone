import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import PageNotFound from "./components/Error/PageNotFound";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { userLogIn, userLogOut } from "./Redux/user/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let userObj = {
          token: user._delegate.accessToken,
          username: user._delegate.email,
        };
        dispatch(userLogIn(userObj));
      } else {
        dispatch(userLogOut());
      }
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
