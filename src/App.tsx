import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { useSelector } from "react-redux";
import { AuthState, UserLogin } from "./redux/slice/authSlice";
import ImageUpload from "./components/imageUpload";
function App() {
  const user = useSelector((state: { auth: AuthState }) => state.auth.user);


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
