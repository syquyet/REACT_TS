import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
function App() {
    return (
      <>
        <BrowserRouter>
          <Header/>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
 
}

export default App;
