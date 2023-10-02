import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import Header from "./page/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./page/components/Footer/Footer";
import Product from "./page/user/product/product";
import Register from "./page/auth/register/register";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Product />
        <hr />
        <Register />
       <Footer />
      </>
    );
  }
}

export default App;
