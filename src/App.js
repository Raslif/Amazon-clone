import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import PageNotFound from "./components/Error/PageNotFound";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
