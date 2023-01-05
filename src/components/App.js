import { Route, Routes, Link } from "react-router-dom";

import MainPage from "./MainPage";
import Product from "./Product";

import logo from "./images/logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Routes basename="/starwars/">
        <Route path="/starwars" element={<MainPage />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
};
export default App;
