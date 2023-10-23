import React, { Component, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, UserLogin, loginSuccess } from "./redux/slice/authSlice";
import Auth from "./utils/Auth";
import axios from "axios";
import { getProduct } from "./redux/slice/productSlice";

function App() {
  const dispatch = useDispatch();
  Auth().then((res) => {
    if (res) {
      dispatch(loginSuccess(res));
    }
  });
  useEffect(() => {
    const fetchdata = async () => {
      const reponse = await axios.get(`http://localhost:3000/products`);
      dispatch(getProduct(reponse.data));
    };
    fetchdata();
  }, []);
  // lấy dữ liệu

  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
