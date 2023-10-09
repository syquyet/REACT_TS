import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Error from "./page/Error";
import Payment from "./page/User/Product/payment";
import Product from "./page/User/Product";
import Header from "./page/components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/product" element={<Product />}>
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
