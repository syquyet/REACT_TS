import React from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
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
