import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Error from "./page/Error";
import Payment from "./page/User/Product/payment";
import Product from "./page/User/Product";
function App() {
  return (
    <div className="App">
      <h1>Tôi là app</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/product" element={<Product />}>
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
